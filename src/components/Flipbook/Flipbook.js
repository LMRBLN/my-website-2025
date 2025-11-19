"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./Flipbook.module.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// Variante für CRA (Create React App)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

// pdfjs.GlobalWorkerOptions.workerSrc =
//   "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.js";

function FlipBook({ file, className, onPageChange }) {
  const [numPages, setNumPages] = useState(null);
  // "rightPage" = seitenzahl der rechten Seite im Spread; Sonderfall: 1 = alleinstehende rechte Seite
  const [rightPage, setRightPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(null); // "next" | "prev" | null
  const [animatingPage, setAnimatingPage] = useState(null); // neue State-Variable
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  const onDocLoad = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Container-Breite messen
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Seitenbreite berechnen (für Doppelseiten halbieren)
  const pageWidth = rightPage === 1 ? containerWidth * 0.5 : containerWidth * 0.5;

  // Hilfsfunktion: Prüft ob Seite einzeln angezeigt werden soll
  const isSinglePage = useCallback((page) => {
    if (!numPages) return false;
    return page === 1 || page === numPages;
  }, [numPages]);

  // Spread bestimmen (links+rechts)
  const getSpread = useCallback(() => {
    if (!numPages) return { left: null, right: null };
    if (animatingPage) {
      if (animatingPage === 1) return { left: null, right: 1 };
      return { left: animatingPage - 1, right: animatingPage };
    }
    
    // Einzelseiten-Anzeige
    if (isSinglePage(rightPage)) {
      return { left: null, right: rightPage };
    }
    
    // Normale Doppelseiten
    return { left: rightPage - 1, right: rightPage };
  }, [rightPage, numPages, animatingPage, isSinglePage]);

  const goNext = useCallback(() => {
    if (!numPages || isFlipping) return;
    if (rightPage === 1) {
      setAnimatingPage(1);
      setIsFlipping("next");
      setTimeout(() => {
        setRightPage(3);
        setAnimatingPage(null);
      }, 220);
    } else {
      const nextPage = rightPage + 2;
      if (nextPage > numPages) {
        // Wenn die nächste Seite über numPages liegt, zeige die letzte Seite
        if (rightPage !== numPages) {
          setAnimatingPage(rightPage);
          setIsFlipping("next");
          setTimeout(() => {
            setRightPage(numPages);
            setAnimatingPage(null);
          }, 220);
        }
        return;
      }
      
      setAnimatingPage(rightPage);
      setIsFlipping("next");
      setTimeout(() => {
        setRightPage(nextPage);
        setAnimatingPage(null);
      }, 220);
    }
  }, [rightPage, numPages, isFlipping]);

  const goPrev = useCallback(() => {
    if (!numPages || isFlipping || rightPage === 1) return;
    
    setAnimatingPage(rightPage);
    setIsFlipping("prev");
    
    setTimeout(() => {
      // Von der letzten Seite zurück
      if (rightPage === numPages) {
        // Wenn die vorletzte Seite eine Doppelseite sein soll
        if (!isSinglePage(numPages - 1)) {
          setRightPage(numPages - 1);
        } else {
          setRightPage(numPages - 2);
        }
      }
      // Von Seite 3 zurück zu Seite 1
      else if (rightPage === 3) {
        setRightPage(1);
      }
      // Normaler Fall: 2 Seiten zurück
      else {
        setRightPage(rightPage - 2);
      }
      setAnimatingPage(null);
    }, 220);
  }, [rightPage, numPages, isFlipping, isSinglePage]);

  useEffect(() => {
    if (isFlipping) {
      const t = setTimeout(() => setIsFlipping(null), 260);
      return () => clearTimeout(t);
    }
  }, [isFlipping]);

  useEffect(() => {
    onPageChange?.(rightPage);
  }, [rightPage, onPageChange]);

  // Keyboard: ← → blättern
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  // Touch/Swipe
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    if (start == null) return;
    const dx = e.changedTouches[0].clientX - start;
    const threshold = 40;
    if (dx < -threshold) goNext();
    if (dx > threshold) goPrev();
    touchStartX.current = null;
  };

  const { left, right } = getSpread();

  return (
    <div
      ref={containerRef}
      className={`${styles['pdf-flipbook']} ${className || ""}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Document 
        file={file} 
        onLoadSuccess={onDocLoad}
        loading={<div className={styles['book-loader'] || ""}>Lade PDF…</div>}
      >
        <div className={`${styles.book} ${isFlipping ? styles[`flip-${isFlipping}`] : ""}`}>
          {/* Linke Seite (nur wenn ab Seite 2 vorhanden) */}
          <div className={`${styles.page} ${styles['page-left']}`} aria-hidden={left == null}>
            {left && (
              <Page
                pageNumber={left}
                width={pageWidth}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            )}
          </div>

          {/* Rechte Seite (immer sichtbar; bei Seite 1 oder letzter Seite alleinstehend) */}
          <div className={`${styles.page} ${styles['page-right']} ${(rightPage === 1 || rightPage === numPages) ? styles.solo : ""}`}>
            {right && (
              <Page
                pageNumber={right}
                width={pageWidth}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            )}
          </div>

          {/* Klick-Zonen */}
          <button className={`${styles.nav} ${styles.prev}`} onClick={goPrev} aria-label="Zurück" />
          <button className={`${styles.nav} ${styles.next}`} onClick={goNext} aria-label="Weiter" />
        </div>
      </Document>

      {/* Footer / Controls */}
      <div className={styles.controls}>
        <button onClick={goPrev} disabled={rightPage === 1}>
          <svg
            className={styles.arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="11"
            viewBox="0 0 32 11"
            fill="currentColor"
          >
            <path d="M0.7368 5.5L6.7368 10.2632L6.7368 7L31.7368 7L31.7368 4L6.7368 4L6.7368 0.7368L0.7368 5.5Z" />
          </svg>
        </button>
        <div className={styles.status}>
          {/*
            Anzeige:
            - Erste Seite: "Seite 1 / N"
            - Letzte Seite (Einzelseite): "Seite N / N"
            - Doppelseite: "L–R / N"
          */}
          {rightPage === 1
            ? `Seite 1 / ${numPages ?? "…" }`
            : (isSinglePage(rightPage)
                ? `Seite ${rightPage} / ${numPages ?? "…"}`
                : `${Math.max(1, rightPage - 1)}–${Math.min(numPages || 0, rightPage)} / ${numPages ?? "…"}`)}
        </div>
        <button
          onClick={goNext}
          disabled={
            !numPages ||
            rightPage >= numPages
          }
        >
          <svg
            className={styles.arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="11"
            viewBox="0 0 32 11"
            fill="currentColor"
          >
            <path d="M31.2632 5.5L25.2632 0.7368V4H0.263184V7H25.2632V10.2632L31.2632 5.5Z" />
          </svg>
        </button>
      </div>

    </div>
  );
}

export default FlipBook;