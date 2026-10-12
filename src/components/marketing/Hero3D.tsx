
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

export default function Hero3D() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(event: React.MouseEvent<HTMLElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({ x: y * -12, y: x * 16 });
  }

  function resetTilt() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section
      className="hero3d-section"
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
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
            We combine strategy, creative, and technology to help ambitious
            businesses get noticed, win customers, and grow with purpose.
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

        <div
          className="hero3d-art"
          aria-label="Interactive abstract 3D artwork"
        >
          <div className="scene-label scene-label-top">
            <span>RD / 001</span>
            <span>CREATIVE SYSTEMS</span>
          </div>

          <div
            className="orbit-scene"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="orbit orbit-c" />

            <div className="orb-core">
              <div className="orb-core-highlight" />
              <div className="orb-core-shade" />
            </div>

            <div className="orb-small orb-small-a" />
            <div className="orb-small orb-small-b" />
            <div className="orb-small orb-small-c" />
            <div className="orb-ring" />
          </div>

          <div className="scene-label scene-label-bottom">
            <span>IDEAS INTO IMPACT</span>
            <span>EST. FOR WHAT&apos;S NEXT ↗</span>
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
