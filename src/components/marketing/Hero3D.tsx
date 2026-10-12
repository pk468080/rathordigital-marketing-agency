
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

type Palette = "aurora" | "sunset" | "cyber";

const palettes: {
  id: Palette;
  name: string;
  color: string;
}[] = [
  { id: "aurora", name: "Violet & cyan", color: "#22d3ee" },
  { id: "sunset", name: "Orange & pink", color: "#ff7a45" },
  { id: "cyber", name: "Lime & electric blue", color: "#a3ff12" },
];

export default function Hero3D() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [palette, setPalette] = useState<Palette>("aurora");

  function handlePointerMove(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: Math.max(-14, Math.min(14, -y * 24)),
      y: Math.max(-18, Math.min(18, x * 32)),
    });
  }

  function resetTilt() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section
      className="hero3d-section"
      data-palette={palette}
    >
      <div className="hero3d-grid" aria-hidden="true" />
      <div className="hero3d-glow hero3d-glow-one" aria-hidden="true" />
      <div className="hero3d-glow hero3d-glow-two" aria-hidden="true" />

      <div className="hero3d-inner">
        <div className="hero3d-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            INDEPENDENT DIGITAL GROWTH STUDIO
          </p>

          <h1>
            Make your next
            <br />
            move <span>matter.</span>
          </h1>

          <p className="hero3d-description">
            We combine strategy, creative, and technology to help
            ambitious businesses get noticed, win customers, and
            grow with purpose.
          </p>

          <div className="hero3d-actions">
            <Link className="button-primary" href="/contact">
              Start a project <MoveUpRight size={17} />
            </Link>

            <Link className="button-quiet" href="/services">
              Explore capabilities <ArrowDownRight size={17} />
            </Link>
          </div>

          <div className="hero-proof">
            <span className="proof-line" />
            <span>STRATEGY FIRST. BUILT FOR GROWTH.</span>
          </div>
        </div>

        <div className="hero3d-art">
          <div className="scene-label scene-label-top">
            <span>RD / 001</span>
            <span>INTERACTIVE 3D STUDIO</span>
          </div>

          <div
            className="palette-controls"
            aria-label="Choose visual color theme"
          >
            <span className="palette-caption">COLOR MODE</span>

            {palettes.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`palette-button ${
                  palette === option.id ? "is-active" : ""
                }`}
                onClick={() => setPalette(option.id)}
                aria-label={option.name}
                aria-pressed={palette === option.id}
                title={option.name}
                style={{ "--swatch": option.color } as React.CSSProperties}
              >
                <span className="palette-swatch" />
              </button>
            ))}
          </div>

          <div
            className="orbit-scene"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            aria-label="Interactive three-dimensional artwork"
            role="img"
          >
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="orbit orbit-c" />

            <div className="orb-core">
              <div className="orb-core-highlight" />
              <div className="orb-core-shade" />
            </div>

            <div className="orb-cube" aria-hidden="true">
              <span className="cube-face cube-front" />
              <span className="cube-face cube-back" />
              <span className="cube-face cube-right" />
              <span className="cube-face cube-left" />
              <span className="cube-face cube-top" />
              <span className="cube-face cube-bottom" />
            </div>

            <div className="orb-small orb-small-a" />
            <div className="orb-small orb-small-b" />
            <div className="orb-small orb-small-c" />
            <div className="orb-ring" />
          </div>

          <div className="scene-label scene-label-bottom">
            <span>IDEAS INTO IMPACT</span>
            <span>MOVE YOUR POINTER ↗</span>
          </div>

          <div className="floating-note">
            <span className="note-mark">✳</span>
            <span>
              <strong>Built to move</strong>
              <small>Design meets performance</small>
            </span>
            <ArrowUpRight size={17} />
          </div>
        </div>
      </div>

      <div className="hero3d-bottom">
        <span>01 — THINK BIGGER</span>
        <span>SCROLL TO EXPLORE ↓</span>
        <span>RATHORE DIGITAL</span>
      </div>
    </section>
  );
}
