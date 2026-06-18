'use client';

import React, { useEffect, useState } from 'react';

const CaseStudyStyles = `
  :root {
    --ink: #0B0C10;
    --navy: #071B3E;
    --navy-mid: #0E3270;
    --chase: #005EB8;
    --chase-light: #EBF3FC;
    --jpmorgan: #C49A2A;
    --jpmorgan-light: #FAF3DC;
    --jpmorgan-dark: #8B6914;
    --saffron: #D64B1A;
    --cream: #FDFCF8;
    --paper: #F5F4EF;
    --border: #DDD9CE;
    --border-dark: #BDB8A8;
    --text: #1C1C24;
    --text-mid: #4A4A5A;
    --text-muted: #8A8A9A;
    --success: #165C36;
    --success-bg: #E8F5EE;
    --danger: #8B1C1C;
    --danger-bg: #F9EAEA;
    --white: #FFFFFF;
    --rule: rgba(196,154,42,.3);
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Outfit', sans-serif; color: var(--text); background: var(--cream); display: flex; min-height: 100vh; }

  /* ── NAV ── */
  nav {
    position: fixed; left: 0; top: 0; width: 230px; height: 100vh;
    background: var(--navy); display: flex; flex-direction: column;
    padding: 0; z-index: 100; overflow-y: auto; transition: transform 0.3s ease;
  }
  @media (max-width: 768px) {
    nav { width: 280px; transform: translateX(-100%); }
    nav.active { transform: translateX(0); }
    .nav-toggle { display: flex !important; }
    .nav-overlay { display: block !important; }
  }
  @media (min-width: 769px) {
    .nav-toggle { display: none !important; }
  }
  .nav-toggle {
    position: fixed; top: 16px; left: 16px; width: 44px; height: 44px;
    background: var(--navy); border: 1px solid rgba(196,154,42,.3); border-radius: 6px;
    cursor: pointer; align-items: center; justify-content: center; z-index: 200;
    transition: all .2s; display: none;
  }
  .nav-toggle:hover { background: rgba(0,0,0,.2); }
  .nav-toggle span { width: 20px; height: 2px; background: var(--jpmorgan); display: block; position: relative; transition: all .3s; }
  .nav-toggle.open span { transform: rotate(45deg); }
  .nav-toggle span::before { content: ''; position: absolute; width: 100%; height: 2px; background: var(--jpmorgan); top: -6px; left: 0; transition: all .3s; }
  .nav-toggle.open span::before { transform: rotate(90deg); top: 0; }
  .nav-toggle span::after { content: ''; position: absolute; width: 100%; height: 2px; background: var(--jpmorgan); bottom: -6px; left: 0; transition: all .3s; }
  .nav-toggle.open span::after { opacity: 0; }
  .nav-overlay {
    display: none; position: fixed; inset: 0; background: rgba(0,0,0,.5); z-index: 99;
  }
  .dual-brand { display: flex; flex-direction: column; gap: 6px; padding: 20px; border-bottom: 1px solid rgba(255,255,255,.07); }
  .brand-chase { display: flex; align-items: center; gap: 8px; }
  .brand-jpm { display: flex; align-items: center; gap: 8px; padding-top: 6px; border-top: 1px solid rgba(255,255,255,.08); margin-top: 4px; }
  .b-icon-chase { width: 26px; height: 26px; border-radius: 4px; background: var(--chase); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: #fff; font-family: 'Cormorant Garamond', serif; flex-shrink: 0; }
  .b-icon-jpm { width: 26px; height: 26px; border-radius: 4px; background: var(--jpmorgan); display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; color: var(--ink); font-family: 'Cormorant Garamond', serif; flex-shrink: 0; }
  .b-name { font-family: 'Cormorant Garamond', serif; font-size: 14px; font-weight: 600; color: #fff; }
  .b-sub { font-size: 9px; color: rgba(255,255,255,.35); text-transform: uppercase; letter-spacing: 1.5px; }
  .project-tag { padding: 8px 20px 12px; font-size: 9px; color: var(--jpmorgan); text-transform: uppercase; letter-spacing: 2px; font-weight: 600; }
  .nav-items { padding: 8px 0; flex: 1; }
  .nav-item { display: flex; align-items: flex-start; gap: 10px; padding: 10px 20px; cursor: pointer; transition: all .2s; border-left: 2px solid transparent; text-decoration: none; min-height: 44px; }
  .nav-item:hover, .nav-item.active { background: rgba(255,255,255,.05); border-left-color: var(--jpmorgan); }
  .nav-num { width: 18px; height: 18px; border-radius: 50%; background: rgba(255,255,255,.08); display: flex; align-items: center; justify-content: center; font-size: 8px; font-weight: 700; color: rgba(255,255,255,.4); flex-shrink: 0; margin-top: 2px; font-family: 'Cormorant Garamond', serif; }
  .nav-item.active .nav-num { background: var(--jpmorgan); color: var(--ink); }
  .nav-label { font-size: 10.5px; color: rgba(255,255,255,.45); line-height: 1.35; font-weight: 400; }
  .nav-item.active .nav-label { color: rgba(255,255,255,.9); font-weight: 500; }
  .nav-footer { padding: 16px 20px; border-top: 1px solid rgba(255,255,255,.07); font-size: 9px; color: rgba(255,255,255,.2); line-height: 1.5; }

  /* ── MAIN ── */
  main { margin-left: 230px; flex: 1; min-width: 0; }
  @media (max-width: 768px) { main { margin-left: 0; } }

  /* ── COVER ── */
  .cover { min-height: 100vh; background: var(--ink); position: relative; overflow: hidden; display: flex; align-items: stretch; }
  .cover-left { flex: 1; padding: 72px 60px; display: flex; flex-direction: column; justify-content: space-between; position: relative; z-index: 2; }
  .cover-right { width: 340px; background: var(--navy); display: flex; flex-direction: column; border-left: 1px solid rgba(196,154,42,.2); position: relative; z-index: 2; flex-shrink: 0; }
  .cover-bg-pattern { position: absolute; inset: 0; z-index: 1; background: radial-gradient(ellipse 50% 70% at 30% 50%, rgba(14,50,112,.5) 0%, transparent 60%), radial-gradient(ellipse 30% 30% at 80% 20%, rgba(196,154,42,.06) 0%, transparent 50%); }
  .cover-eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 32px; }
  .cover-rule { width: 40px; height: 1px; background: var(--jpmorgan); }
  .cover-eyebrow-text { font-size: 10px; color: var(--jpmorgan); text-transform: uppercase; letter-spacing: 3px; font-weight: 500; }
  .cover h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 5vw, 66px); line-height: 1.0; color: #fff; font-weight: 600; margin-bottom: 8px; }
  .cover h1 .accent { color: var(--jpmorgan); }
  .cover-sub-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1rem, 2.5vw, 22px); color: rgba(255,255,255,.4); font-style: italic; margin-bottom: 32px; font-weight: 400; line-height: 1.4; }
  .cover-obj { border: 1px solid rgba(196,154,42,.25); border-left: 3px solid var(--jpmorgan); border-radius: 0 6px 6px 0; padding: 16px 20px; font-size: 13px; color: rgba(255,255,255,.65); line-height: 1.7; margin-bottom: 32px; background: rgba(196,154,42,.04); }
  .cover-obj strong { color: var(--jpmorgan); }
  .cover-tiers { display: flex; gap: 12px; margin-bottom: 40px; flex-wrap: wrap; }
  .tier-pill { padding: 8px 16px; border-radius: 4px; font-size: 12px; font-weight: 600; letter-spacing: .5px; }
  .tier-chase { background: var(--chase); color: #fff; }
  .tier-jpm { background: var(--jpmorgan); color: var(--ink); }
  .cover-toc { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .toc-row { display: flex; align-items: flex-start; gap: 8px; padding: 7px 10px; background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.06); border-radius: 4px; }
  .toc-n { width: 16px; height: 16px; border-radius: 50%; background: var(--jpmorgan); display: flex; align-items: center; justify-content: center; font-size: 8px; font-weight: 700; color: var(--ink); flex-shrink: 0; margin-top: 1px; font-family: 'Cormorant Garamond', serif; }
  .toc-t { font-size: 10px; color: rgba(255,255,255,.45); line-height: 1.35; }
  .cover-right-head { background: var(--jpmorgan); padding: 20px; font-family: 'Cormorant Garamond', serif; font-size: 11px; font-weight: 600; color: var(--ink); text-transform: uppercase; letter-spacing: 2px; }
  .cover-stat-block { padding: 20px; border-bottom: 1px solid rgba(196,154,42,.15); }
  .cover-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 44px; color: #fff; font-weight: 600; line-height: 1; word-break: break-word; }
  .cover-stat-unit { font-size: 11px; color: var(--jpmorgan); margin-top: 2px; font-weight: 500; letter-spacing: .5px; }
  .cover-stat-desc { font-size: 11px; color: rgba(255,255,255,.35); margin-top: 4px; line-height: 1.4; }
  .cover-bottom { padding: 20px; border-top: 1px solid rgba(196,154,42,.1); margin-top: auto; }
  .cover-bottom p { font-size: 11px; color: rgba(255,255,255,.3); line-height: 1.5; font-style: italic; }

  /* ── MOBILE COVER ── */
  @media (max-width: 768px) {
    .cover { flex-direction: column; min-height: auto; padding-top: 60px; }
    .cover-left { padding: 32px 16px 24px; }
    .cover-right { width: 100%; border-left: none; border-top: 1px solid rgba(196,154,42,.2); }
    .cover-tiers { flex-direction: column; }
    .tier-pill { width: 100%; text-align: center; }
    .cover-toc { grid-template-columns: 1fr; }
    .cover-eyebrow { margin-bottom: 20px; }
  }

  /* ── SECTIONS ── */
  section { padding: 72px 60px; border-bottom: 1px solid var(--border); background: var(--cream); }
  section:nth-child(even) { background: var(--paper); }
  @media (max-width: 768px) {
    section { padding: 40px 16px; }
  }
  .s-header { margin-bottom: 40px; }
  .s-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
  .s-rule { width: 24px; height: 2px; background: var(--jpmorgan); }
  .s-tag { font-size: 9px; font-weight: 700; color: var(--jpmorgan-dark); text-transform: uppercase; letter-spacing: 2px; }
  .s-num { font-size: 9px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 2px; }
  .s-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.4rem, 3vw, 36px); color: var(--navy); line-height: 1.15; margin-bottom: 8px; font-weight: 600; }
  .s-sub { font-size: 14px; color: var(--text-mid); line-height: 1.65; max-width: 680px; }
  .bottom-banner { background: var(--navy); color: rgba(255,255,255,.85); padding: 14px 20px; border-radius: 6px; font-size: 12px; margin-top: 36px; border-left: 4px solid var(--jpmorgan); line-height: 1.6; }
  .bottom-banner strong { color: var(--jpmorgan); }

  /* ── GRIDS ── */
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
  @media (max-width: 768px) {
    .grid-2 { grid-template-columns: 1fr; gap: 16px; }
    .grid-3 { grid-template-columns: 1fr; gap: 12px; }
    .grid-4 { grid-template-columns: 1fr 1fr; gap: 10px; }
  }

  /* ── CARDS ── */
  hr { border: none; border-top: 1px solid var(--border); margin: 24px 0; }
  .card { background: var(--white); border: 1px solid var(--border); border-radius: 8px; padding: 20px; }
  .card.navy { background: var(--navy); color: #fff; border-color: var(--navy); }
  .card.gold { background: var(--jpmorgan-light); border-color: rgba(196,154,42,.25); }
  .card.chase { background: var(--chase-light); border-color: rgba(0,94,184,.15); }
  .card h3 { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-muted); margin-bottom: 8px; }
  .card.navy h3 { color: rgba(255,255,255,.35); }
  .big-num { font-family: 'Cormorant Garamond', serif; font-size: 40px; color: var(--navy); line-height: 1; font-weight: 600; }
  .card.navy .big-num { color: var(--jpmorgan); }
  .card .unit { font-size: 11px; color: var(--text-muted); margin-top: 3px; }
  .card.navy .unit { color: rgba(255,255,255,.35); }
  .card p { font-size: 13px; color: var(--text-mid); line-height: 1.55; }
  .card.navy p { color: rgba(255,255,255,.6); }
  .hbox { background: var(--chase-light); border: 1px solid rgba(0,94,184,.12); border-radius: 8px; padding: 18px; }
  .hbox.gold { background: var(--jpmorgan-light); border-color: rgba(196,154,42,.2); }
  .hbox.dark { background: var(--navy); border-color: var(--navy); }
  .hbox.danger { background: var(--danger-bg); border-color: rgba(139,28,28,.12); }
  .hbox.success { background: var(--success-bg); border-color: rgba(22,92,54,.12); }
  label { font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 10px; }
  .serif { font-family: 'Cormorant Garamond', serif; }
  .pill { display: inline-block; padding: 3px 10px; border-radius: 3px; font-size: 10px; font-weight: 600; letter-spacing: .3px; }
  .pill-navy { background: var(--navy); color: #fff; }
  .pill-chase { background: var(--chase); color: #fff; }
  .pill-gold { background: var(--jpmorgan); color: var(--ink); }
  .pill-green { background: var(--success-bg); color: var(--success); }
  .pill-red { background: var(--danger-bg); color: var(--danger); }
  .pill-muted { background: var(--paper); border: 1px solid var(--border); color: var(--text-muted); }
  .pill-saffron { background: #FEF0E8; color: var(--saffron); }
  .tree { display: flex; flex-direction: column; }
  .tree-item { display: flex; align-items: flex-start; gap: 9px; padding: 9px 0; border-bottom: 1px solid var(--border); }
  .tree-item:last-child { border: none; }
  .dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
  .dot-navy { background: var(--navy-mid); }
  .dot-gold { background: var(--jpmorgan); }
  .dot-chase { background: var(--chase); }
  .dot-accent { background: var(--saffron); }
  .dot-muted { background: var(--border-dark); }
  .tree-text { font-size: 13px; color: var(--text-mid); line-height: 1.5; }
  .tree-text strong { color: var(--text); font-weight: 600; }
  .bars { display: flex; flex-direction: column; gap: 9px; }
  .bar-row { display: flex; align-items: center; gap: 10px; }
  .bar-lbl { font-size: 11px; color: var(--text-mid); width: 120px; flex-shrink: 0; text-align: right; }
  .bar-track { flex: 1; height: 20px; background: var(--border); border-radius: 3px; overflow: hidden; }
  .bar-fill { height: 100%; border-radius: 3px; display: flex; align-items: center; justify-content: flex-end; padding-right: 8px; font-size: 10px; font-weight: 700; color: #fff; }
  .fill-navy { background: var(--navy); }
  .fill-chase { background: var(--chase); }
  .fill-gold { background: var(--jpmorgan); }
  .fill-accent { background: var(--saffron); }
  .fill-muted { background: var(--text-muted); }
  .hypo { border: 1px solid var(--border); border-radius: 7px; padding: 14px; background: var(--white); }
  .hypo-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; }
  .hypo-lbl { font-size: 10px; font-weight: 700; color: var(--navy-mid); text-transform: uppercase; letter-spacing: .8px; }
  .badge-y { background: #D4EDDA; color: #1A5C32; font-size: 9px; font-weight: 700; padding: 2px 7px; border-radius: 3px; text-transform: uppercase; }
  .badge-n { background: #FADADD; color: #8B1A1A; font-size: 9px; font-weight: 700; padding: 2px 7px; border-radius: 3px; text-transform: uppercase; }
  .hypo p { font-size: 12.5px; color: var(--text-mid); line-height: 1.5; }

  /* ── SEG TABLE ── */
  .seg-wrap { background: var(--white); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
  .table-scroll { overflow-x: auto; }
  .seg-head-row { display: grid; grid-template-columns: 140px 1fr 1fr 1fr; background: var(--navy); color: #fff; min-width: 580px; }
  .seg-head-cell { padding: 10px 14px; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,.6); border-right: 1px solid rgba(255,255,255,.07); }
  .seg-row { display: grid; grid-template-columns: 140px 1fr 1fr 1fr; border-top: 1px solid var(--border); min-width: 580px; }
  .seg-axis { padding: 12px 14px; background: var(--paper); font-size: 11px; color: var(--text-mid); font-weight: 500; border-right: 1px solid var(--border); display: flex; align-items: center; }
  .seg-cell-inner { padding: 12px 14px; border-right: 1px solid var(--border); font-size: 12px; color: var(--text-mid); }
  .seg-cell-inner.target { background: rgba(196,154,42,.06); }
  .seg-cell-inner.highlight { background: rgba(0,94,184,.05); }
  .seg-cell-inner.rejected { background: var(--paper); opacity: .65; }
  .seg-tag { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 4px; }
  .seg-pct { font-family: 'Cormorant Garamond', serif; font-size: 26px; color: var(--navy); font-weight: 600; line-height: 1; }
  .seg-desc { font-size: 10px; color: var(--text-muted); margin-top: 3px; line-height: 1.35; }

  /* ── PERSONAS ── */
  .persona { border: 1.5px solid var(--border); border-radius: 8px; overflow: hidden; background: var(--white); }
  .persona-head { padding: 18px 20px; display: flex; gap: 14px; align-items: flex-start; }
  .persona-head.chase-head { background: linear-gradient(135deg, var(--navy) 0%, #0E3270 100%); }
  .persona-head.jpm-head { background: linear-gradient(135deg, var(--ink) 0%, #1A1400 100%); }
  .avatar { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; flex-shrink: 0; }
  .av-chase { background: var(--chase); color: #fff; }
  .av-jpm { background: var(--jpmorgan); color: var(--ink); }
  .persona-name { font-family: 'Cormorant Garamond', serif; font-size: 20px; color: #fff; font-weight: 600; }
  .persona-role { font-size: 11px; color: rgba(255,255,255,.45); margin-top: 2px; }
  .persona-quote { font-size: 11.5px; font-style: italic; color: rgba(255,255,255,.6); margin-top: 9px; border-left: 2px solid var(--jpmorgan); padding-left: 9px; line-height: 1.5; }
  .persona-quote.chase-q { border-left-color: var(--chase); }
  .persona-body { padding: 18px 20px; }
  .persona-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  @media (max-width: 480px) { .persona-row { grid-template-columns: 1fr; } }
  .p-block h4 { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 7px; }
  .p-block li { font-size: 11.5px; color: var(--text-mid); padding-left: 10px; position: relative; list-style: none; line-height: 1.6; margin-bottom: 3px; }
  .p-block li::before { content: '›'; position: absolute; left: 0; color: var(--chase); }
  .jpm-li::before { color: var(--jpmorgan) !important; }
  .quote { border-left: 3px solid var(--jpmorgan); background: var(--jpmorgan-light); border-radius: 0 7px 7px 0; padding: 13px 16px; font-size: 13px; color: var(--text-mid); font-style: italic; line-height: 1.6; }
  .quote.chase-q { border-left-color: var(--chase); background: var(--chase-light); }
  .q-attr { margin-top: 6px; font-size: 10px; font-weight: 600; color: var(--text-muted); font-style: normal; text-transform: uppercase; letter-spacing: .5px; }
  .math-box { background: var(--navy); border-radius: 10px; padding: 24px 28px; color: #fff; }
  .math-box h4 { font-size: 9px; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,.35); margin-bottom: 16px; }
  .math-step { display: flex; align-items: baseline; gap: 10px; padding: 9px 0; border-bottom: 1px solid rgba(255,255,255,.07); flex-wrap: wrap; }
  .math-step:last-child { border: none; }
  .m-lbl { font-size: 12px; color: rgba(255,255,255,.5); flex: 1; min-width: 120px; }
  .m-val { font-family: 'Cormorant Garamond', serif; font-size: 24px; color: var(--jpmorgan); white-space: nowrap; font-weight: 600; }
  .m-note { font-size: 10px; color: rgba(255,255,255,.25); width: 100%; }
  .math-result { background: rgba(196,154,42,.12); border: 1px solid rgba(196,154,42,.3); border-radius: 7px; padding: 16px; margin-top: 18px; text-align: center; }
  .r-lbl { font-size: 9px; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,.35); }
  .r-val { font-family: 'Cormorant Garamond', serif; font-size: 48px; color: var(--jpmorgan); font-weight: 600; line-height: 1; word-break: break-word; }
  .r-sub { font-size: 11px; color: rgba(255,255,255,.4); margin-top: 6px; }

  /* ── TABLES ── */
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  thead tr { background: var(--navy); }
  th { padding: 11px 16px; text-align: left; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,.55); }
  td { padding: 11px 16px; border-bottom: 1px solid var(--border); color: var(--text-mid); }
  tr:last-child td { border: none; }
  tr.w td { background: var(--jpmorgan-light); font-weight: 500; color: var(--text); }
  .score-big { font-family: 'Cormorant Garamond', serif; font-size: 24px; color: var(--navy); font-weight: 600; }
  tr.w .score-big { color: var(--jpmorgan-dark); }
  @media (max-width: 768px) {
    table { font-size: 11px; }
    th, td { padding: 8px 10px; }
  }
  .m-table { display: flex; flex-direction: column; gap: 1px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border); }
  .m-row { display: grid; grid-template-columns: 110px 1fr; background: var(--white); }
  .m-row:nth-child(even) { background: var(--paper); }
  .m-type { padding: 12px 14px; font-size: 9px; font-weight: 700; color: #fff; display: flex; align-items: center; justify-content: center; text-align: center; text-transform: uppercase; letter-spacing: 1px; }
  .m-type.ns { background: var(--jpmorgan); }
  .m-type.l1 { background: #1A4B9C; }
  .m-type.l2 { background: #2563BC; }
  .m-type.ac { background: #4A80CC; }
  .m-type.ad { background: #6898D8; }
  .m-type.en { background: var(--navy-mid); }
  .m-type.re { background: #3A5C8A; }
  .m-type.sa { background: #5574A0; }
  .m-desc { padding: 12px 16px; font-size: 12.5px; color: var(--text-mid); line-height: 1.5; }
  .pitfall { border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
  .p-risk { background: var(--danger-bg); padding: 13px 16px; border-bottom: 1px solid rgba(139,28,28,.1); }
  .p-risk strong { color: var(--danger); font-size: 9px; text-transform: uppercase; letter-spacing: 1px; }
  .p-risk p { font-size: 12.5px; color: var(--text-mid); margin-top: 4px; line-height: 1.5; }
  .p-opp { background: var(--success-bg); padding: 13px 16px; }
  .p-opp strong { color: var(--success); font-size: 9px; text-transform: uppercase; letter-spacing: 1px; }
  .p-opp p { font-size: 12.5px; color: var(--text-mid); margin-top: 4px; line-height: 1.5; }
  .sys-box { padding: 14px; background: var(--white); border: 1px solid var(--border); border-radius: 6px; position: relative; }
  .sys-box h5 { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 5px; }
  .sys-box p { font-size: 12px; color: var(--text-mid); line-height: 1.45; }
  .sys-box.blue { background: var(--chase-light); border-color: rgba(0,94,184,.15); }
  .sys-box.gld { background: var(--jpmorgan-light); border-color: rgba(196,154,42,.2); }
  .sys-num { position: absolute; top: -9px; left: -9px; width: 20px; height: 20px; border-radius: 50%; background: var(--navy); color: #fff; font-size: 8px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
  .tier-section { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
  .tier-badge { padding: 4px 12px; border-radius: 3px; font-size: 10px; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; }
  .tb-chase { background: var(--chase); color: #fff; }
  .tb-jpm { background: var(--jpmorgan); color: var(--ink); }
  .tier-divider { height: 1px; flex: 1; background: var(--border); }

  /* ── PHONE PROTOTYPES ── */
  .proto-scroll { display: flex; gap: 16px; align-items: flex-start; overflow-x: auto; padding-bottom: 12px; margin-bottom: 32px; -webkit-overflow-scrolling: touch; }
  .phone { width: 170px; background: #E8E8EE; border-radius: 22px; padding: 8px; border: 2px solid #C8C8D0; flex-shrink: 0; }
  .phone-screen { background: #fff; border-radius: 16px; overflow: hidden; }
  .p-bar { padding: 7px 10px; font-size: 8px; font-weight: 700; color: #fff; }
  .p-bar.chase { background: var(--chase); }
  .p-bar.jpm { background: var(--ink); }
  .p-body { padding: 8px; }
  .p-score-card { border-radius: 8px; padding: 8px 10px; margin-bottom: 5px; text-align: center; }
  .p-score-card.chase { background: linear-gradient(135deg,var(--navy) 0%,var(--chase) 100%); }
  .p-score-card.jpm { background: linear-gradient(135deg,var(--ink) 0%,#2A1800 100%); }
  .p-score-num { font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 600; color: #fff; }
  .p-score-lbl { font-size: 6.5px; color: rgba(255,255,255,.5); text-transform: uppercase; letter-spacing: .5px; }
  .p-badge { font-size: 7px; background: rgba(196,154,42,.2); color: var(--jpmorgan); padding: 1px 5px; border-radius: 2px; margin-top: 3px; display: inline-block; }
  .p-row { display: flex; justify-content: space-between; align-items: center; padding: 4px 0; border-bottom: 1px solid #F0F0F0; }
  .p-row span:first-child { font-size: 7.5px; color: #666; }
  .p-row span:last-child { font-size: 7.5px; font-weight: 600; color: var(--navy); }
  .p-nudge { background: #FEF8E8; border-radius: 5px; padding: 5px 7px; font-size: 7px; color: #665500; margin-top: 5px; }
  .p-cta { background: var(--chase); border-radius: 5px; padding: 5px; text-align: center; font-size: 7.5px; font-weight: 700; color: #fff; margin-top: 5px; }
  .p-cta.jpm { background: var(--jpmorgan); color: var(--ink); }
  .proto-step { display: flex; flex-direction: column; align-items: center; gap: 8px; flex-shrink: 0; }
  .proto-lbl { font-size: 10px; color: var(--text-mid); text-align: center; max-width: 170px; line-height: 1.3; }
  .proto-arr { color: var(--text-muted); font-size: 22px; margin-top: 55px; flex-shrink: 0; }
  .so-card { border: 1px solid var(--border); border-radius: 7px; padding: 15px; background: var(--white); }
  .so-card h4 { font-size: 11.5px; font-weight: 600; color: var(--navy); margin-bottom: 5px; }
  .so-card p { font-size: 12.5px; color: var(--text-mid); line-height: 1.5; }
  .india-stats { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
  .india-stat { border: 1px solid var(--border); border-radius: 5px; padding: 8px 12px; background: var(--white); text-align: center; flex: 1; min-width: 110px; }
  .india-stat .isn { font-family: 'Cormorant Garamond', serif; font-size: 26px; color: var(--navy); font-weight: 600; line-height: 1; }
  .india-stat .isl { font-size: 9px; color: var(--text-muted); text-transform: uppercase; letter-spacing: .8px; margin-top: 2px; }
  .sol-card { border: 1px solid var(--border); border-radius: 8px; padding: 20px; background: var(--white); position: relative; }
  .sol-card.sel { border-color: var(--jpmorgan); border-width: 2px; }
  .sol-card.sel-chase { border-color: var(--chase); border-width: 2px; }
  .sol-check { position: absolute; top: -10px; right: -10px; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 11px; }
  .sc-gold { background: var(--jpmorgan-dark); }
  .sc-chase { background: var(--chase); }
  .sol-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 22px; color: var(--navy); margin-bottom: 4px; font-weight: 600; }
  .sol-card .sol-obj { font-size: 9px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
  .sol-card p { font-size: 13px; color: var(--text-mid); line-height: 1.6; }
  .if-then { background: var(--paper); border-radius: 6px; padding: 12px 14px; margin-top: 12px; font-size: 12px; color: var(--text-mid); line-height: 1.6; border-left: 2px solid var(--border); }
  .if-then.chase-if { border-left-color: var(--chase); }
  .if-then.jpm-if { border-left-color: var(--jpmorgan); }
  .if-then strong { color: var(--text); }
  .rbi-steps { display: flex; flex-direction: column; gap: 8px; }
  .rbi-step { display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; background: var(--white); border: 1px solid var(--border); border-radius: 6px; }
  .rbi-step.done { background: var(--jpmorgan-light); border-color: rgba(196,154,42,.25); }
  .rbi-n { width: 24px; height: 24px; border-radius: 50%; background: var(--navy); color: #fff; font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; font-family: 'Cormorant Garamond', serif; }
  .rbi-step.done .rbi-n { background: var(--jpmorgan); color: var(--ink); }
  .rbi-body h5 { font-size: 12px; font-weight: 600; color: var(--text); margin-bottom: 2px; }
  .rbi-body p { font-size: 12px; color: var(--text-mid); line-height: 1.45; }

  /* ── GTM SECTION STYLES ── */
  .gtm-phase { border: 1px solid var(--border); border-radius: 8px; overflow: hidden; margin-bottom: 16px; }
  .gtm-phase-head { padding: 14px 18px; display: flex; align-items: center; gap: 12px; }
  .gtm-phase-head.p1 { background: linear-gradient(90deg, var(--navy) 0%, #0E3270 100%); }
  .gtm-phase-head.p2 { background: linear-gradient(90deg, var(--chase) 0%, #0074D9 100%); }
  .gtm-phase-head.p3 { background: linear-gradient(90deg, var(--jpmorgan-dark) 0%, var(--jpmorgan) 100%); }
  .gtm-phase-num { font-family: 'Cormorant Garamond', serif; font-size: 36px; color: rgba(255,255,255,.25); font-weight: 600; line-height: 1; }
  .gtm-phase-title { font-family: 'Cormorant Garamond', serif; font-size: 20px; color: #fff; font-weight: 600; }
  .gtm-phase-period { font-size: 10px; color: rgba(255,255,255,.5); margin-top: 2px; text-transform: uppercase; letter-spacing: 1px; }
  .gtm-phase-body { padding: 16px 18px; background: var(--white); }
  .gtm-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
  @media (max-width: 768px) { .gtm-grid { grid-template-columns: 1fr; } }
  .gtm-block h5 { font-size: 9px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 7px; }
  .gtm-block li { font-size: 12px; color: var(--text-mid); padding-left: 10px; position: relative; list-style: none; line-height: 1.5; margin-bottom: 4px; }
  .gtm-block li::before { content: '›'; position: absolute; left: 0; color: var(--jpmorgan); }
  .gtm-kpi { background: var(--paper); border-top: 1px solid var(--border); padding: 10px 18px; display: flex; gap: 20px; flex-wrap: wrap; }
  .gtm-kpi-item { font-size: 11px; color: var(--text-mid); }
  .gtm-kpi-item strong { color: var(--navy); font-size: 13px; }

  /* ── COMPETITIVE RESPONSE STYLES ── */
  .cr-table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
  .cr-table thead tr { background: var(--navy); }
  .cr-table th { padding: 10px 14px; text-align: left; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,.55); white-space: nowrap; }
  .cr-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); color: var(--text-mid); vertical-align: top; line-height: 1.5; }
  .cr-table tr:last-child td { border: none; }
  .cr-table .trigger-cell { font-weight: 600; color: var(--danger); font-size: 11px; }
  .cr-table .response-cell { color: var(--success); font-size: 11px; font-weight: 500; }
  .cr-table tr:nth-child(even) td { background: var(--paper); }

  /* ── VIDEO ── */
  .video-wrap { position: relative; padding-top: 56.25%; border-radius: 6px; overflow: hidden; border: 1px solid rgba(0,0,0,.08); }
  .video-wrap iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: block; }
`;

const ProjectUdayCaseStudy: React.FC = () => {
  const [activeSection, setActiveSection] = useState('cover');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ids = ['cover','s1','s2','s3','s4','s5','s6','s7','s8','s9'];
      let cur = 'cover';
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) cur = id;
      });
      setActiveSection(cur);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nc = (id: string) => `nav-item ${activeSection === id ? 'active' : ''}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CaseStudyStyles }} />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

      {/* Mobile Toggle */}
      <button className={`nav-toggle ${navOpen ? 'open' : ''}`} onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
        <span></span>
      </button>

      {/* Mobile Overlay */}
      {navOpen && <div className="nav-overlay" onClick={() => setNavOpen(false)} />}

      {/* ── SIDEBAR ── */}
      <nav className={navOpen ? 'active' : ''} onClick={() => setNavOpen(false)}>
        <div className="dual-brand">
          <div className="brand-chase">
            <div className="b-icon-chase">C</div>
            <div><div className="b-name">Chase</div><div className="b-sub">Middle Class Banking</div></div>
          </div>
          <div className="brand-jpm">
            <div className="b-icon-jpm">JPM</div>
            <div><div className="b-name">J.P. Morgan</div><div className="b-sub">Private Banking</div></div>
          </div>
        </div>
        <div className="project-tag">⊕ Project Uday — India Entry</div>
        <div className="nav-items">
          <a className={nc('cover')} href="#cover"><div className="nav-num">◉</div><div className="nav-label">Overview</div></a>
          <a className={nc('s1')} href="#s1"><div className="nav-num">1</div><div className="nav-label">Business &amp; Product Outcome</div></a>
          <a className={nc('s2')} href="#s2"><div className="nav-num">2</div><div className="nav-label">Market &amp; User Segmentation</div></a>
          <a className={nc('s3')} href="#s3"><div className="nav-num">3</div><div className="nav-label">User Research &amp; Root Cause</div></a>
          <a className={nc('s4')} href="#s4"><div className="nav-num">4</div><div className="nav-label">Problem Framing</div></a>
          <a className={nc('s5')} href="#s5"><div className="nav-num">5</div><div className="nav-label">Solution Ideation</div></a>
          <a className={nc('s6')} href="#s6"><div className="nav-num">6</div><div className="nav-label">Prototyping &amp; Detailing</div></a>
          <a className={nc('s7')} href="#s7"><div className="nav-num">7</div><div className="nav-label">System Design &amp; Constraints</div></a>
          <a className={nc('s8')} href="#s8"><div className="nav-num">8</div><div className="nav-label">GTM Execution Plan</div></a>
          <a className={nc('s9')} href="#s9"><div className="nav-num">9</div><div className="nav-label">Metrics &amp; Pitfall Mitigation</div></a>
        </div>
        <div className="nav-footer">JPMorgan Chase &amp; Co.<br/>India Market Entry Strategy<br/>Confidential — Strategy Division</div>
      </nav>

      <main>
        {/* ── COVER ── */}
        <div className="cover" id="cover">
          <div className="cover-bg-pattern"></div>
          <div className="cover-left">
            <div>
              <div className="cover-eyebrow"><div className="cover-rule"></div><div className="cover-eyebrow-text">Project Uday — India Market Entry</div></div>
              <h1>How <span className="accent">JPMC</span> Can<br/>Disrupt India's<br/>₹200L Cr<br/>Banking Market</h1>
              <div className="cover-sub-title">A dual-brand strategy: Chase for the middle class.<br/>J.P. Morgan for India's wealthy. If They Are Allowed To</div>
              <div className="cover-obj">
                <strong>Objective:</strong> Acquire <strong>5 million Chase India customers</strong> from HDFC, Axis, and SBI's urban middle-class base within 5 years through a zero-fee, AI-first banking model — while establishing <strong>J.P. Morgan Private Banking India</strong> as the premier wealth management platform for India's 3.5 million HNIs and UHNIs.
              </div>
              <div className="cover-tiers">
                <span className="tier-pill tier-chase">🏦 Chase → Middle Class (₹5L–25L/yr)</span>
                <span className="tier-pill tier-jpm">⬛ J.P. Morgan → HNI / UHNI (₹1Cr+)</span>
              </div>
            </div>
            <div className="cover-toc">
              {[
                ['1','Business & Product Outcome Mapping'],
                ['2','Market Understanding & User Segmentation'],
                ['3','User Research & Root Cause Identification'],
                ['4','Problem Framing & Impact Mapping'],
                ['5','Solution Ideation & Prioritization'],
                ['6','Prototyping & Solution Detailing'],
                ['7','System Design, Constraints & RBI Path'],
                ['8','GTM Execution Plan'],
                ['9','Metrics & Pitfall Mitigation'],
              ].map(([n,t]) => (
                <div className="toc-row" key={n}><div className="toc-n">{n}</div><div className="toc-t">{t}</div></div>
              ))}
            </div>
          </div>
          <div className="cover-right">
            <div className="cover-right-head">India Market Snapshot</div>
            {[
              ['₹200L Cr','Total Retail Banking Deposits',"India's total deposit base — the world's 4th largest by volume"],
              ['560M','Banked Urban Adults','With digital smartphone access — the target addressable pool'],
              ['3.5M','High Net Worth Individuals','Holding ₹1Cr+ investable assets — J.P. Morgan\'s private banking target'],
              ['$0','Current JPMC Retail Revenue in India','JPMC has investment banking presence; zero retail or private banking at scale'],
            ].map(([num,unit,desc]) => (
              <div className="cover-stat-block" key={unit}>
                <div className="cover-stat-num">{num}</div>
                <div className="cover-stat-unit">{unit}</div>
                <div className="cover-stat-desc">{desc}</div>
              </div>
            ))}
            <div className="cover-bottom">
              <p>India is projected to be the world's 3rd largest economy by 2030. This is JPMC's last window to enter before incumbents fortify the digital moat further.</p>
            </div>
          </div>
        </div>

        {/* ── VIDEO ── */}
        <section style={{ padding: '40px 60px', borderBottom: '1px solid rgba(0,0,0,.08)' }}>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--text)', marginBottom: '8px' }}>Watch the Full Case Study</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Deep dive into Project Uday's strategic framework and implementation roadmap.</p>
          </div>
          <div className="video-wrap">
            <iframe src="https://www.youtube.com/embed/M0GaCSBFvS4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </section>

        {/* ── S1: BUSINESS & PRODUCT OUTCOME ── */}
        <section id="s1">
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 01</div></div>
            <h2 className="s-title">Business &amp; Product Outcome Mapping</h2>
            <p className="s-sub">Understanding why India is JPMC's most critical international expansion — and how a two-tier banking model maps to distinct, profitable business outcomes for each segment.</p>
          </div>
          <div className="grid-2" style={{ marginBottom: '28px' }}>
            <div>
              <label>The Strategic Case for India Entry</label>
              <div className="grid-2" style={{ gap: '10px', marginBottom: '16px' }}>
                <div className="card navy"><h3>GDP (2024)</h3><div className="big-num">$3.7T</div><div className="unit">5th largest globally; 3rd by 2030</div></div>
                <div className="card navy"><h3>JPMC India Revenue Today</h3><div className="big-num">~0%</div><div className="unit">Of retail + private banking in India</div></div>
                <div className="card navy"><h3>UPI Transactions/Month</h3><div className="big-num">13B</div><div className="unit">India is the world's #1 real-time payments market</div></div>
                <div className="card navy"><h3>Smartphone Users</h3><div className="big-num">700M+</div><div className="unit">Mobile-first banking is the only model</div></div>
              </div>
              <div className="hbox">
                <p style={{ fontSize: '13px', lineHeight: 1.65 }}>JPMC generates <strong>$162B in annual revenue globally</strong>. India — the world's most populated nation and 5th largest economy — contributes <strong style={{ color: 'var(--saffron)' }}>near zero to this</strong> from retail or private banking. With Chime, Revolut, and domestic neobanks disrupting globally, a dual-brand India strategy is both an offensive opportunity and a defensive necessity.</p>
              </div>
            </div>
            <div>
              <label>Business Outcome → Product Outcome Tree</label>
              <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ background: 'var(--navy)', padding: '11px 16px', fontSize: '12px', fontWeight: 600, color: '#fff' }}>Business Outcome: Establish Profitable India Banking Franchise</div>
                <div style={{ padding: '14px 16px' }}>
                  <div className="tier-section"><div className="tier-badge tb-chase">Chase India</div><div className="tier-divider"></div></div>
                  <div className="tree">
                    <div className="tree-item"><div className="dot dot-chase"></div><div className="tree-text"><strong>Monthly Active Customers × ARPU</strong> — zero-fee model monetised through interchange, FD spread, premium cards</div></div>
                    <div className="tree-item"><div className="dot dot-chase"></div><div className="tree-text"><strong>Salary Account Partnerships</strong> — IT sector, MNCs (captive audience, guaranteed deposits)</div></div>
                    <div className="tree-item"><div className="dot dot-chase"></div><div className="tree-text"><strong>Retention Rate</strong> — keeping customers as they grow into HNI territory (pipeline to J.P. Morgan)</div></div>
                  </div>
                  <div className="tier-section" style={{ marginTop: '14px' }}><div className="tier-badge tb-jpm">J.P. Morgan Private</div><div className="tier-divider"></div></div>
                  <div className="tree">
                    <div className="tree-item"><div className="dot dot-gold"></div><div className="tree-text"><strong>Total AUM Under Management</strong> — 0.75–1.5% annual fee on investable assets</div></div>
                    <div className="tree-item"><div className="dot dot-gold"></div><div className="tree-text"><strong>Advisory Fee Revenue</strong> — estate planning, succession, global tax optimization</div></div>
                    <div className="tree-item"><div className="dot dot-gold"></div><div className="tree-text"><strong>Cross-sell Rate</strong> — Chase → J.P. Morgan upgrade funnel as customers build wealth</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label>Unit Economics: Two-Tier Model Comparison</label>
          <div className="grid-2" style={{ gap: '20px' }}>
            <div style={{ border: '1px solid var(--chase)', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ background: 'var(--chase)', padding: '10px 16px', fontSize: '10px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>Chase India — Middle Class Unit Economics</div>
              <div style={{ padding: '14px 16px', background: 'var(--white)' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Revenue / Active User / Month</div>
                <div className="tree">
                  <div className="tree-item"><div className="dot dot-chase"></div><div className="tree-text"><strong>Interchange Revenue:</strong> ₹180 (UPI + debit/credit card spends)</div></div>
                  <div className="tree-item"><div className="dot dot-chase"></div><div className="tree-text"><strong>FD / Savings Spread:</strong> ₹90 (avg. ₹45,000 balance × 2.4% spread)</div></div>
                  <div className="tree-item"><div className="dot dot-chase"></div><div className="tree-text"><strong>Premium Card Fees:</strong> ₹65 (Chase Sapphire India — annual fee amortised)</div></div>
                  <div className="tree-item"><div className="dot dot-chase"></div><div className="tree-text"><strong>Forex &amp; Cross-border:</strong> ₹30 ({'<'} 1% markup vs. competitor 3–5%)</div></div>
                  <div className="tree-item" style={{ border: 'none', paddingTop: '8px' }}><div className="dot" style={{ background: 'transparent' }}></div><div className="tree-text" style={{ fontWeight: 600 }}><strong>Total Revenue: <span style={{ color: 'var(--chase)' }}>₹365/mo</span></strong> &nbsp;|&nbsp; Cost: ₹175/mo &nbsp;|&nbsp; <strong>Profit: ₹190/mo</strong></div></div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ border: '1px solid var(--jpmorgan)', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ background: 'var(--jpmorgan)', padding: '10px 16px', fontSize: '10px', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '1px' }}>J.P. Morgan India — HNI Unit Economics</div>
                <div style={{ padding: '14px 16px', background: 'var(--white)' }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Revenue / HNI Client / Year</div>
                  <div className="tree">
                    <div className="tree-item"><div className="dot dot-gold"></div><div className="tree-text"><strong>AUM Mgmt Fee:</strong> ₹4.25L (₹5Cr avg. AUM × 0.85% annual)</div></div>
                    <div className="tree-item"><div className="dot dot-gold"></div><div className="tree-text"><strong>Advisory &amp; Planning Fees:</strong> ₹1.80L (estate, succession, global tax)</div></div>
                    <div className="tree-item"><div className="dot dot-gold"></div><div className="tree-text"><strong>Lending Products:</strong> ₹90K (loans against securities, property)</div></div>
                    <div className="tree-item"><div className="dot dot-gold"></div><div className="tree-text"><strong>Transaction Banking:</strong> ₹60K (business + personal transactions)</div></div>
                    <div className="tree-item" style={{ border: 'none', paddingTop: '8px' }}><div className="dot" style={{ background: 'transparent' }}></div><div className="tree-text" style={{ fontWeight: 600 }}><strong>Total Revenue: <span style={{ color: 'var(--jpmorgan-dark)' }}>₹6.55L/yr</span></strong> &nbsp;|&nbsp; Cost: ₹1.8L/yr &nbsp;|&nbsp; <strong>Profit: ₹4.75L/yr</strong></div></div>
                  </div>
                </div>
              </div>
              <div className="hbox gold" style={{ marginTop: '12px' }}>
                <p style={{ fontSize: '13px' }}><strong>The compounding moat:</strong> A Chase customer who joins at 28 earning ₹10L/yr will likely reach HNI status by 42. The Chase → J.P. Morgan upgrade path creates a self-reinforcing lifetime value engine with zero additional acquisition cost.</p>
              </div>
            </div>
          </div>
          <div className="bottom-banner">
            <strong>Final Objective:</strong> Build India's first globally-backed dual-tier banking platform — Chase for 5M middle-class customers (₹190/mo profit each) + J.P. Morgan for 35,000 HNI clients (₹4.75L/yr profit each) — generating a combined run-rate of ₹27,800 Cr in annual profit by Year 5.
          </div>
        </section>

        {/* ── S2: MARKET & SEGMENTATION ── */}
        <section id="s2" style={{ background: 'var(--paper)' }}>
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 02</div></div>
            <h2 className="s-title">Market Understanding &amp; User Segmentation</h2>
            <p className="s-sub">Mapping India's competitive banking landscape, identifying structural weaknesses in HDFC, Axis, and SBI's offerings, and selecting the highest-conversion target segments for each JPMC tier.</p>
          </div>
          <div className="india-stats">
            {[['85M','HDFC Bank Customers'],['500M','SBI Account Holders'],['30M','Axis Bank Customers'],['40M','Kotak Mahindra'],['3.5M','HNIs in India'],['1.5L','Ultra HNIs (₹25Cr+)']].map(([n,l]) => (
              <div className="india-stat" key={l}><div className="isn">{n}</div><div className="isl">{l}</div></div>
            ))}
          </div>
          <div className="grid-2" style={{ gap: '20px', marginBottom: '28px' }}>
            <div>
              <label>Indian Banking Market Share (Retail Deposits)</label>
              <div className="bars" style={{ marginBottom: '16px' }}>
                {[['SBI + PSU Banks','48%','fill-muted',48],['HDFC Bank','18%','fill-navy',18],['ICICI Bank','15%','fill-navy',15],['Axis + Kotak','11%','fill-chase',11],['Neobanks + Others','8%','fill-accent',8]].map(([l,v,c,w]) => (
                  <div className="bar-row" key={String(l)}><div className="bar-lbl">{l}</div><div className="bar-track"><div className={`bar-fill ${c}`} style={{ width: `${w}%` }}>{v}</div></div></div>
                ))}
              </div>
              <hr/>
              <label>Structural Weaknesses (Where JPMC Can Win)</label>
              <div className="tree">
                <div className="tree-item"><div className="dot dot-accent"></div><div className="tree-text"><strong>SBI:</strong> 500M accounts but government-mandated inertia — dated UX, inconsistent service, zero personalization. Customers stay out of habit, not loyalty.</div></div>
                <div className="tree-item"><div className="dot dot-accent"></div><div className="tree-text"><strong>HDFC:</strong> Digital-first but aggressive cross-selling, opaque charges (MAB penalties, forex markups), and no global wealth capability for HNIs.</div></div>
                <div className="tree-item"><div className="dot dot-accent"></div><div className="tree-text"><strong>Axis:</strong> Mid-tier trapped between scale and premium — inconsistent service quality, limited international products, no meaningful private banking.</div></div>
                <div className="tree-item"><div className="dot dot-gold"></div><div className="tree-text"><strong>Kotak Private / Julius Baer India:</strong> Best HNI options currently — but lack JPMC's global balance sheet, deal flow, and integrated banking capabilities.</div></div>
              </div>
            </div>
            <div>
              <label>Problem Hypotheses (Validated via Research, n=65)</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '16px' }}>
                {[
                  ['H1','Majority of urban middle-class bank customers (55%+) are "passive loyalists" — staying with their current bank not from satisfaction but from switching inertia.'],
                  ['H2','Less than 20% of HDFC/Axis middle-class customers understand or use financial planning features. The primary use case is salary receipt + bill payment.'],
                  ['H3','Over 75% of India\'s HNIs feel their current private bank does not offer genuine global investment access — only India-allocated products through a "global" wrapper.'],
                  ['H4','A zero-fee, global-grade UX from a trusted global brand would motivate 1-in-5 surveyed HDFC/SBI/Axis customers to open a Chase account within 6 months.'],
                ].map(([id, text]) => (
                  <div className="hypo" key={id}>
                    <div className="hypo-top"><div className="hypo-lbl">{id}</div><div className="badge-y">✓ Accepted</div></div>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <label>Four-Tier Segmentation: Selecting JPMC's Target Segments</label>
          <div className="table-scroll">
            <div className="seg-wrap" style={{ marginBottom: '20px' }}>
              <div className="seg-head-row">
                <div className="seg-head-cell">Income Tier</div>
                <div className="seg-head-cell">Segment Profile</div>
                <div className="seg-head-cell">Current Banking</div>
                <div className="seg-head-cell">JPMC Decision</div>
              </div>
              <div className="seg-row">
                <div className="seg-axis">Jan Dhan / Basic<br/><span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>&lt; ₹5L/yr</span></div>
                <div className="seg-cell-inner rejected"><div className="seg-tag" style={{ color: 'var(--text-muted)' }}>Rural / Semi-Urban</div><div className="seg-pct" style={{ color: 'var(--text-muted)' }}>~300M</div><div className="seg-desc">Government schemes, Jan Dhan, no smartphone banking</div></div>
                <div className="seg-cell-inner rejected"><span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>SBI, Gramin Banks, Post Office</span></div>
                <div className="seg-cell-inner rejected"><span className="pill pill-muted">❌ Not Target</span><div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>No margin potential; PSL obligation only</div></div>
              </div>
              <div className="seg-row" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="seg-axis">Middle Class<br/><span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>₹5L–25L/yr</span></div>
                <div className="seg-cell-inner highlight"><div className="seg-tag" style={{ color: 'var(--chase)' }}>Urban Salaried</div><div className="seg-pct">~120M</div><div className="seg-desc">IT professionals, MNC employees, young urban adults</div></div>
                <div className="seg-cell-inner highlight"><span style={{ fontSize: '12px', color: 'var(--text-mid)', fontWeight: 500 }}>HDFC (primary), SBI (salary), Axis (secondary)</span></div>
                <div className="seg-cell-inner" style={{ background: 'rgba(0,94,184,.07)', border: '2px solid var(--chase)' }}>
                  <span className="pill" style={{ background: 'var(--chase)', color: '#fff', fontSize: '9px' }}>✓ Chase India</span>
                  <div style={{ fontSize: '11px', color: 'var(--text-mid)', marginTop: '5px' }}>Primary target — highest switching propensity; digital-native; globally aspirational</div>
                </div>
              </div>
              <div className="seg-row" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="seg-axis">Affluent<br/><span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>₹25L–1Cr/yr</span></div>
                <div className="seg-cell-inner"><div className="seg-tag" style={{ color: 'var(--navy)' }}>Business Owners / Senior Execs</div><div className="seg-pct">~15M</div><div className="seg-desc">Multiple income streams, growing investable assets, complex needs</div></div>
                <div className="seg-cell-inner"><span style={{ fontSize: '12px', color: 'var(--text-mid)', fontWeight: 500 }}>HDFC Preferred, Kotak 811, ICICI Wealth</span></div>
                <div className="seg-cell-inner" style={{ background: 'rgba(196,154,42,.06)' }}>
                  <span className="pill pill-gold" style={{ fontSize: '9px' }}>Chase + J.P. Morgan Bridge</span>
                  <div style={{ fontSize: '11px', color: 'var(--text-mid)', marginTop: '5px' }}>Chase for daily banking; migrate to J.P. Morgan as AUM grows</div>
                </div>
              </div>
              <div className="seg-row" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="seg-axis">HNI / UHNI<br/><span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>₹1Cr+ investable</span></div>
                <div className="seg-cell-inner highlight" style={{ background: 'rgba(196,154,42,.06)' }}><div className="seg-tag" style={{ color: 'var(--jpmorgan-dark)' }}>Promoters / CXOs / NRIs</div><div className="seg-pct" style={{ color: 'var(--jpmorgan-dark)' }}>3.5M</div><div className="seg-desc">Need global access, tax optimization, family office, succession planning</div></div>
                <div className="seg-cell-inner highlight" style={{ background: 'rgba(196,154,42,.06)' }}><span style={{ fontSize: '12px', color: 'var(--text-mid)', fontWeight: 500 }}>HDFC Private, Kotak Private, Julius Baer India, Standard Chartered Private</span></div>
                <div className="seg-cell-inner" style={{ background: 'rgba(196,154,42,.08)', border: '2px solid var(--jpmorgan)' }}>
                  <span className="pill pill-gold" style={{ fontSize: '9px' }}>✓ J.P. Morgan Private Banking</span>
                  <div style={{ fontSize: '11px', color: 'var(--text-mid)', marginTop: '5px' }}>Primary target — unmatched global balance sheet, deal flow, and private banking legacy</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-banner">
            <strong>Target Segments:</strong> (1) Urban middle class earning ₹5L–25L/yr — currently at HDFC/SBI/Axis, digitally native, globally aspirational, high switching propensity. (2) HNIs and UHNIs with ₹1Cr+ investable assets — underserved by domestic private banks lacking genuine global access.
          </div>
        </section>

        {/* ── S3: USER RESEARCH ── */}
        <section id="s3">
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 03</div></div>
            <h2 className="s-title">User Research &amp; Root Cause Identification</h2>
            <p className="s-sub">A mixed-methods study with 65 participants across Mumbai, Delhi, Bengaluru, Chennai, and Hyderabad to uncover the exact pain points driving switching intent.</p>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <span className="pill pill-navy">65 Participants</span>
            <span className="pill pill-gold">User Surveys</span>
            <span className="pill pill-navy">16 In-Depth Interviews</span>
            <span className="pill pill-navy">Usability Tests (HDFC / SBI apps)</span>
            <span className="pill pill-saffron">5 Cities: MUM, DEL, BLR, CHN, HYD</span>
          </div>
          <div className="grid-2" style={{ gap: '24px', marginBottom: '28px' }}>
            <div>
              <div className="tier-section"><div className="tier-badge tb-chase">Chase Persona</div><div className="tier-divider"></div></div>
              <div className="persona">
                <div className="persona-head chase-head">
                  <div className="avatar av-chase">A</div>
                  <div>
                    <div className="persona-name">Ananya Krishnan</div>
                    <div className="persona-role">Age 27 · Software Engineer, TCS · Bengaluru</div>
                    <div className="persona-role">Salary ₹12L/yr · HDFC Primary, SBI Salary Account</div>
                    <div className="persona-quote chase-q">"I pay ₹590 as quarterly charges and ₹750 forex on every international purchase. I don't even know what I'm paying for. A bank that simply doesn't steal from me silently would get my account tomorrow."</div>
                  </div>
                </div>
                <div className="persona-body">
                  <div className="persona-row">
                    <div className="p-block"><h4>Frustrations</h4><ul>
                      <li>Opaque MAB penalty charges</li>
                      <li>3–5% forex markup on international spends</li>
                      <li>App navigation: 5 taps to transfer money</li>
                      <li>Aggressive loan / credit card calls</li>
                      <li>Feels like a "number," not a customer</li>
                    </ul></div>
                    <div className="p-block"><h4>Goals &amp; Motivations</h4><ul>
                      <li>Financial independence by 35</li>
                      <li>Global travel without banking friction</li>
                      <li>One app for all money</li>
                      <li>Feels proud recommending her bank</li>
                    </ul></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="tier-section"><div className="tier-badge tb-jpm">J.P. Morgan Persona</div><div className="tier-divider"></div></div>
              <div className="persona">
                <div className="persona-head jpm-head">
                  <div className="avatar av-jpm">R</div>
                  <div>
                    <div className="persona-name">Rajesh Mehta</div>
                    <div className="persona-role">Age 54 · Managing Director, Pharma Co. · Mumbai</div>
                    <div className="persona-role">Net Worth ₹35Cr · HDFC Private + Julius Baer · Two businesses, NRI son</div>
                    <div className="persona-quote">"My RM at HDFC Private changes every year. Julius Baer knows global markets but doesn't understand India's tax laws. I need someone who can hold both simultaneously."</div>
                  </div>
                </div>
                <div className="persona-body">
                  <div className="persona-row">
                    <div className="p-block"><h4>Frustrations</h4><ul>
                      <li className="jpm-li">Relationship manager turnover every 12–18 months</li>
                      <li className="jpm-li">No genuine global equity / alternatives access from Indian banks</li>
                      <li className="jpm-li">Estate planning done by a separate law firm — not integrated</li>
                      <li className="jpm-li">Global banks don't understand India's FEMA / tax structure</li>
                    </ul></div>
                    <div className="p-block"><h4>Goals &amp; Motivations</h4><ul>
                      <li className="jpm-li">Consolidated global wealth view in one institution</li>
                      <li className="jpm-li">Transition businesses to his son (NRI) seamlessly</li>
                      <li className="jpm-li">Access to US equities, PE funds, REITs globally</li>
                      <li className="jpm-li">A partner, not a product-pusher</li>
                    </ul></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-2" style={{ gap: '24px' }}>
            <div>
              <label>Voice of the Customer — Middle Class</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="quote chase-q">"I maintain ₹10,000 minimum balance at HDFC just to avoid charges. That money earns nothing. A zero-fee account would free ₹10K of my savings." <div className="q-attr">— 24 yr old, Product Analyst, Pune</div></div>
                <div className="quote chase-q">"I use Google Pay and PhonePe for everything. I open my bank app maybe once a week, just to check salary credit." <div className="q-attr">— 29 yr old, UI/UX Designer, Mumbai</div></div>
                <div className="quote chase-q">"If Chase opened in India — actual Chase with the same app quality as the US version — I'd move my salary account the same day." <div className="q-attr">— 26 yr old, Data Engineer, Hyderabad</div></div>
              </div>
            </div>
            <div>
              <label>Root Cause Analysis — Two Distinct Problems</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="card" style={{ borderLeft: '3px solid var(--chase)' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--chase)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Root Cause — Middle Class</div>
                  <p>Indian banks profit from <strong>customer inertia, not customer value</strong>. They charge opaque fees, offer generic UX, and provide zero financial guidance — exploiting switching costs rather than earning loyalty. A zero-fee, globally benchmarked UX breaks this model structurally.</p>
                </div>
                <div className="card" style={{ borderLeft: '3px solid var(--jpmorgan)' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--jpmorgan-dark)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Root Cause — HNI / UHNI</div>
                  <p>India's HNIs are trapped between <strong>domestic banks with limited global access</strong> and <strong>global banks with no India expertise</strong>. No single institution today offers a JPMC-level global balance sheet integrated with deep knowledge of Indian FEMA, taxation, and succession law.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── S4: PROBLEM FRAMING ── */}
        <section id="s4" style={{ background: 'var(--paper)' }}>
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 04</div></div>
            <h2 className="s-title">Problem Framing &amp; Impact Mapping</h2>
            <p className="s-sub">Translating research into precise problem statements for each JPMC tier — and quantifying the business value unlocked by solving them at scale.</p>
          </div>
          <div className="grid-2" style={{ gap: '24px', marginBottom: '28px' }}>
            <div>
              <label>Problem Canvas — Chase India (Middle Class)</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                <div className="card gold"><h3>True Problem</h3><p>Urban Indian professionals are financially capable but institutionally trapped — paying hidden fees for a mediocre experience while their aspirations (global travel, investing, wealth-building) go unserved. They lack a bank worthy of their ambition.</p></div>
                <div className="card"><h3>Why Now?</h3><p>India has 200M+ digital payment-native adults who have never known a good banking app. Post-HDFC merger with HDFC Bank creating pricing tensions, and SBI's digitalisation ceiling — the switching moment is now. A new entrant has a 2-year window before incumbents course-correct.</p></div>
              </div>
              <div className="card navy">
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Jobs to be Done — Ananya (Chase)</div>
                <p style={{ fontSize: '13px', lineHeight: 1.8 }}>When I <em style={{ color: 'rgba(255,255,255,.65)' }}>want to bank smarter and live globally</em>, but struggle because <em style={{ color: 'rgba(255,255,255,.65)' }}>my current bank treats me as a minimum balance number</em>, <strong style={{ color: 'var(--jpmorgan)' }}>help me bank with zero friction, zero hidden fees, and a financial compass</strong> — so that I can grow my money while the bank grows with me.</p>
              </div>
            </div>
            <div>
              <label>Problem Canvas — J.P. Morgan India (HNI/UHNI)</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                <div className="card gold"><h3>True Problem</h3><p>India's wealthy are the world's most underbanked wealthy. They have the capital but lack a single institution that can hold their global portfolio, their India business, and their family succession plan in one integrated relationship. This is a ₹1.5T AUM opportunity going to waste across fragmented providers.</p></div>
                <div className="card"><h3>Why Now?</h3><p>India will add 200,000 new HNI households annually through 2030 as the startup and IT boom matures. First-mover advantage in private banking relationships compounds over decades — an HNI at 45 is a client for 30+ years. Every year of delay is AUM permanently captured by a competitor.</p></div>
              </div>
              <div className="card navy">
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Jobs to be Done — Rajesh (J.P. Morgan)</div>
                <p style={{ fontSize: '13px', lineHeight: 1.8 }}>When I <em style={{ color: 'rgba(255,255,255,.65)' }}>want my wealth to work across India and the world</em>, but struggle because <em style={{ color: 'rgba(255,255,255,.65)' }}>no institution understands both my Indian tax structure and global investment ambitions</em>, <strong style={{ color: 'var(--jpmorgan)' }}>give me a single, trusted institution that is my financial command centre — locally rooted, globally powered.</strong></p>
              </div>
            </div>
          </div>
          <label>Impact Mapping — 5-Year Revenue Projection</label>
          <div className="grid-2" style={{ gap: '20px' }}>
            <div className="math-box">
              <h4>Chase India — 5-Year Math</h4>
              {[['Target addressable pool (urban middle class)','120M'],['Assumed conversion rate (switching + new)','4.2%'],['Year 5 active Chase India customers','5.0M'],['Profit per active customer / month','₹190'],['Annual run-rate profit (Year 5)','₹11,400 Cr']].map(([l,v]) => (
                <div className="math-step" key={String(l)}><div className="m-lbl">{l}</div><div><div className="m-val">{v}</div></div></div>
              ))}
              <div className="math-result">
                <div className="r-lbl">Chase India 5-Year Cumulative Revenue</div>
                <div className="r-val">₹38,000 Cr</div>
                <div className="r-sub">Ramped over 5 years; excludes partnership &amp; ecosystem revenue</div>
              </div>
            </div>
            <div className="math-box">
              <h4>J.P. Morgan Private India — 5-Year Math</h4>
              {[['HNI / UHNI addressable pool','3.5M'],['Target market capture — Year 5','1%'],['Average AUM per client','₹6.5Cr'],['Total AUM under management (Year 5)','₹2.3L Cr'],['Annual revenue at 0.85% AUM fee','₹19,550 Cr']].map(([l,v]) => (
                <div className="math-step" key={String(l)}><div className="m-lbl">{l}</div><div><div className="m-val">{v}</div></div></div>
              ))}
              <div className="math-result">
                <div className="r-lbl">J.P. Morgan India AUM (Year 5)</div>
                <div className="r-val">₹2.3L Cr</div>
                <div className="r-sub">₹19,550 Cr annual revenue + advisory fees + NRI inflows</div>
              </div>
            </div>
          </div>
          <div className="bottom-banner">
            <strong>Combined 5-Year Impact:</strong> Chase India (₹11,400 Cr/yr profit) + J.P. Morgan Private India (₹19,550 Cr/yr revenue) = <strong>₹30,000+ Cr annual India franchise value by Year 5</strong> — making India JPMC's #2 international market after the UK.
          </div>
        </section>

        {/* ── S5: SOLUTION IDEATION ── */}
        <section id="s5">
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 05</div></div>
            <h2 className="s-title">Solution Ideation &amp; Prioritization</h2>
            <p className="s-sub">Two distinct product propositions, each purpose-built for its segment — validated against Value, Usability, Feasibility, Viability, and Scalability under Indian market conditions.</p>
          </div>
          <div className="tier-section"><div className="tier-badge tb-chase">Chase India — Middle Class Solution</div><div className="tier-divider"></div></div>
          <div className="grid-2" style={{ gap: '16px', marginBottom: '28px' }}>
            <div className="sol-card sel-chase">
              <div className="sol-check sc-chase">✓</div>
              <div className="sol-obj">Solution 1A — Selected</div>
              <h3>Chase India Zero</h3>
              <p>A truly zero-fee current account with <strong>UPI-native integration</strong>, a <strong>global Mastercard</strong> debit card (0.5% forex markup vs. competitors' 3–5%), AI-powered Financial Compass, and salary partnership program targeting IT and MNC employers.</p>
              <div className="if-then chase-if">
                <strong>If</strong> we launch a zero-fee, globally benchmarked banking app with a clear financial compass (goal-setting, spending insights, salary analytics), and distribute via IT company salary partnerships,<br/><br/>
                <strong>Then</strong> we will attract HDFC/SBI/Axis customers through a combination of rational cost advantage and emotional superiority — because Chase India will be the first Indian bank account that makes you feel like a global citizen.
              </div>
            </div>
            <div className="sol-card">
              <div className="sol-obj">Solution 1B — Not Selected (Phase 2)</div>
              <h3>Chase India Credit-First</h3>
              <p>Enter India solely through a premium credit card product (Chase Sapphire India equivalent) to build brand recognition without the regulatory complexity of a full banking license.</p>
              <div className="if-then">
                <strong>Why it falls short:</strong> A credit card alone doesn't capture deposits, doesn't build the salary account relationship, and doesn't create the data flywheel needed to power the Compass AI. It's a billboard, not a bank.
              </div>
            </div>
          </div>
          <div className="tier-section"><div className="tier-badge tb-jpm">J.P. Morgan Private — HNI Solution</div><div className="tier-divider"></div></div>
          <div className="grid-2" style={{ gap: '16px', marginBottom: '28px' }}>
            <div className="sol-card sel">
              <div className="sol-check sc-gold">✓</div>
              <div className="sol-obj">Solution 2A — Selected</div>
              <h3>J.P. Morgan Private Banking India</h3>
              <p>A full-service <strong>private banking and wealth management</strong> offering for HNIs/UHNIs — combining a dedicated Private Client Advisor (no RM turnover guarantee), global portfolio access (US equities, PE, alternatives), and India-specific expertise (FEMA, succession law, estate planning). Entry AUM: ₹3Cr+.</p>
              <div className="if-then jpm-if">
                <strong>If</strong> we establish J.P. Morgan Private Banking India with a "Global + Local" promise — JPMC's world-class investment platform fully integrated with India's regulatory and tax landscape — then we will displace Kotak Private and Julius Baer India by offering what neither can: the entire world from a single institution.
              </div>
            </div>
            <div className="sol-card">
              <div className="sol-obj">Solution 2B — Not Selected</div>
              <h3>India Family Office Platform</h3>
              <p>Launch exclusively as a Family Office platform for UHNIs (₹25Cr+) only — ignoring the broader HNI market. More capital-light, lower compliance burden, but extreme niche.</p>
              <div className="if-then">
                <strong>Why it falls short:</strong> Only 1.5L UHNIs in India. Misses the 3.5M HNI market which is the compounding engine. Fails to build the aspirational funnel from Chase → J.P. Morgan → J.P. Morgan Private.
              </div>
            </div>
          </div>
          <label>Solution Prioritization — RICE Scoring (Reach × Impact × Confidence ÷ Effort)</label>
          <div className="table-scroll">
            <table style={{ marginBottom: '8px' }}>
              <thead>
                <tr><th>Product</th><th>Reach (M users)</th><th>Impact (1–10)</th><th>Confidence (0–1)</th><th>Effort (1–10)</th><th>RICE Score</th></tr>
              </thead>
              <tbody>
                <tr className="w"><td><strong>Chase India Zero</strong></td><td>120</td><td>9</td><td>0.85</td><td>7</td><td><span className="score-big">131</span></td></tr>
                <tr><td>Chase Credit-First</td><td>40</td><td>4</td><td>0.55</td><td>3</td><td><span className="score-big" style={{ color: 'var(--text-muted)', fontSize: '18px' }}>29</span></td></tr>
                <tr className="w"><td><strong>J.P. Morgan Private</strong></td><td>3.5</td><td>8</td><td>0.90</td><td>6</td><td><span className="score-big">4.2</span></td></tr>
                <tr><td>Family Office Only</td><td>0.15</td><td>3</td><td>0.60</td><td>3</td><td><span className="score-big" style={{ color: 'var(--text-muted)', fontSize: '18px' }}>0.09</span></td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '20px' }}>Formula: RICE = (Reach × Impact × Confidence) ÷ Effort. Reach normalised per tier addressable market.</p>
          <div className="bottom-banner">
            <strong>Selected Solutions:</strong> (1) <strong>Chase India Zero</strong> — zero-fee, UPI-native banking for middle class via salary partnerships. (2) <strong>J.P. Morgan Private Banking India</strong> — global + local private banking for HNI/UHNIs with ₹3Cr+ AUM entry point.
          </div>
        </section>

        {/* ── S6: PROTOTYPING ── */}
        <section id="s6" style={{ background: 'var(--paper)' }}>
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 06</div></div>
            <h2 className="s-title">Prototyping &amp; Solution Detailing</h2>
            <p className="s-sub">Mapping the core product experience for each tier — from Chase India's mobile-first zero-fee platform to J.P. Morgan Private's concierge-grade wealth dashboard.</p>
          </div>
          <div className="tier-section" style={{ marginBottom: '20px' }}><div className="tier-badge tb-chase">Chase India — App Experience</div><div className="tier-divider"></div></div>
          <div className="proto-scroll">
            <div className="proto-step">
              <div className="phone"><div className="phone-screen">
                <div className="p-bar chase">Chase India</div>
                <div className="p-body">
                  <div className="p-score-card chase"><div className="p-score-lbl">Financial Compass Score</div><div className="p-score-num">718</div><div className="p-badge">↑ +14 this month</div></div>
                  <div className="p-row"><span>💰 Savings</span><span style={{ color: 'var(--chase)' }}>₹84,500</span></div>
                  <div className="p-row"><span>💳 Spent this week</span><span style={{ color: 'var(--saffron)' }}>₹3,240</span></div>
                  <div className="p-row"><span>🎯 Home Goal</span><span>62% on track</span></div>
                  <div className="p-nudge">💡 Salary credited! Transfer ₹5,000 to your Home Fund now.</div>
                </div>
              </div></div>
              <div className="proto-lbl">Home: Compass Dashboard with goal tracking &amp; salary nudge</div>
            </div>
            <div className="proto-arr">›</div>
            <div className="proto-step">
              <div className="phone"><div className="phone-screen">
                <div className="p-bar chase">← Send / UPI</div>
                <div className="p-body">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', marginBottom: '5px' }}>
                    <div style={{ background: 'var(--chase-light)', borderRadius: '5px', padding: '6px', textAlign: 'center', fontSize: '8px', fontWeight: 600, color: 'var(--chase)' }}>📱 UPI Pay</div>
                    <div style={{ background: 'var(--chase-light)', borderRadius: '5px', padding: '6px', textAlign: 'center', fontSize: '8px', fontWeight: 600, color: 'var(--chase)' }}>🌍 Send Abroad</div>
                    <div style={{ background: 'var(--chase-light)', borderRadius: '5px', padding: '6px', textAlign: 'center', fontSize: '8px', fontWeight: 600, color: 'var(--chase)' }}>🏦 NEFT/IMPS</div>
                    <div style={{ background: 'var(--chase-light)', borderRadius: '5px', padding: '6px', textAlign: 'center', fontSize: '8px', fontWeight: 600, color: 'var(--chase)' }}>📲 Request ₹</div>
                  </div>
                  <div className="p-row"><span>Chase (you)</span><span style={{ color: 'var(--success)' }}>0.5% markup</span></div>
                  <div className="p-row"><span>HDFC</span><span style={{ color: 'var(--saffron)' }}>3.5% markup</span></div>
                  <div className="p-nudge">✈️ Travelling to the US? Your Chase card saves ₹2,850 vs your old HDFC card.</div>
                </div>
              </div></div>
              <div className="proto-lbl">UPI + Global Transfer with live forex savings indicator</div>
            </div>
            <div className="proto-arr">›</div>
            <div className="proto-step">
              <div className="phone"><div className="phone-screen">
                <div className="p-bar chase">← Spending Insights</div>
                <div className="p-body">
                  <div style={{ fontSize: '9px', fontWeight: 600, color: 'var(--navy)', marginBottom: '5px' }}>May 2025 — ₹28,450 spent</div>
                  <div style={{ display: 'flex', gap: '2px', height: '40px', alignItems: 'flex-end', marginBottom: '4px' }}>
                    {[80,60,45,35,20].map((h,i) => <div key={i} style={{ flex: 1, background: ['var(--chase)','var(--saffron)','var(--jpmorgan)','var(--navy)','#8AA'][i], borderRadius: '2px 2px 0 0', height: `${h}%` }}></div>)}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '6.5px', color: 'var(--text-muted)', marginBottom: '5px' }}>
                    <span>Food</span><span>Shop</span><span>Travel</span><span>Bills</span><span>Other</span>
                  </div>
                  <div className="p-nudge">🔴 Dining 23% over your usual. Adjust next month to stay on Home Goal track.</div>
                  <div style={{ marginTop: '4px', fontSize: '7.5px', fontWeight: 600, color: 'var(--text-muted)' }}>0 hidden fees this month ✓</div>
                </div>
              </div></div>
              <div className="proto-lbl">Spending Insights: category breakdown + zero-fee transparency</div>
            </div>
            <div className="proto-arr">›</div>
            <div className="proto-step">
              <div className="phone"><div className="phone-screen">
                <div className="p-bar chase">← Upgrade to Sapphire</div>
                <div className="p-body">
                  <div style={{ background: 'linear-gradient(135deg,#111 0%,#222 100%)', borderRadius: '7px', padding: '8px', marginBottom: '5px' }}>
                    <div style={{ fontSize: '7px', color: 'rgba(255,255,255,.4)', textTransform: 'uppercase' }}>Chase Sapphire India</div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--jpmorgan)', fontFamily: "'Cormorant Garamond', serif" }}>Ananya Krishnan</div>
                  </div>
                  <div className="p-row"><span>Annual fee</span><span style={{ color: 'var(--chase)' }}>₹999/yr</span></div>
                  <div className="p-row"><span>Lounge Access</span><span>✓ 8 free/yr</span></div>
                  <div className="p-row"><span>Forex markup</span><span style={{ color: 'var(--success)' }}>0% (Zero!)</span></div>
                  <div className="p-row"><span>Rewards</span><span>5× on travel</span></div>
                  <div className="p-cta">Upgrade — Saves ₹12,400/yr vs HDFC</div>
                </div>
              </div></div>
              <div className="proto-lbl">Chase Sapphire India — premium card upsell with live savings calc</div>
            </div>
          </div>

          <div className="tier-section" style={{ marginBottom: '20px' }}><div className="tier-badge tb-jpm">J.P. Morgan Private — Wealth Dashboard</div><div className="tier-divider"></div></div>
          <div className="proto-scroll">
            <div className="proto-step">
              <div className="phone"><div className="phone-screen">
                <div className="p-bar jpm">J.P. Morgan Private</div>
                <div className="p-body">
                  <div className="p-score-card jpm"><div className="p-score-lbl">Total Wealth</div><div className="p-score-num">₹34.8Cr</div><div className="p-badge">↑ +₹1.2Cr this quarter</div></div>
                  <div className="p-row"><span>🇮🇳 India Portfolio</span><span>₹21.5Cr</span></div>
                  <div className="p-row"><span>🌍 Global Portfolio</span><span>₹10.2Cr</span></div>
                  <div className="p-row"><span>🏠 Real Estate</span><span>₹3.1Cr</span></div>
                  <div className="p-nudge">📞 Advisor Priya calls today at 11AM re: US tech portfolio rebalance.</div>
                </div>
              </div></div>
              <div className="proto-lbl">Unified wealth view: India + Global in one dashboard</div>
            </div>
            <div className="proto-arr">›</div>
            <div className="proto-step">
              <div className="phone"><div className="phone-screen">
                <div className="p-bar jpm">← Global Investments</div>
                <div className="p-body">
                  <div className="p-row"><span>US Equities</span><span style={{ color: 'var(--jpmorgan)' }}>$42,000</span></div>
                  <div className="p-row"><span>JPM PE Fund III</span><span style={{ color: 'var(--jpmorgan)' }}>$18,000</span></div>
                  <div className="p-row"><span>Global REIT Basket</span><span style={{ color: 'var(--jpmorgan)' }}>$12,500</span></div>
                  <div className="p-row"><span>India Midcap PMS</span><span style={{ color: 'var(--jpmorgan)' }}>₹4.2Cr</span></div>
                  <div className="p-nudge" style={{ background: 'rgba(196,154,42,.1)', color: 'var(--jpmorgan-dark)' }}>New: JPM Infrastructure Opportunities Fund — Min ₹50L. Allocation reserved.</div>
                </div>
              </div></div>
              <div className="proto-lbl">Global investment access: PE, REIT, US equities</div>
            </div>
            <div className="proto-arr">›</div>
            <div className="proto-step">
              <div className="phone"><div className="phone-screen">
                <div className="p-bar jpm">← Succession Planning</div>
                <div className="p-body">
                  <div style={{ fontSize: '9px', fontWeight: 600, color: 'var(--ink)', marginBottom: '5px' }}>Mehta Family Legacy Plan</div>
                  <div className="p-row"><span>Will &amp; Estate</span><span style={{ color: 'var(--success)' }}>✓ Finalised</span></div>
                  <div className="p-row"><span>Son (NRI Transfer)</span><span style={{ color: 'var(--saffron)' }}>In Progress</span></div>
                  <div className="p-row"><span>Trust Structure</span><span style={{ color: 'var(--success)' }}>✓ Active</span></div>
                  <div className="p-row"><span>FEMA Compliance</span><span style={{ color: 'var(--success)' }}>✓ Filed</span></div>
                  <div className="p-nudge" style={{ background: 'rgba(196,154,42,.1)', color: 'var(--jpmorgan-dark)' }}>JPM FEMA experts handle cross-border transfer end-to-end.</div>
                </div>
              </div></div>
              <div className="proto-lbl">Succession &amp; Estate: India FEMA + global NRI planning</div>
            </div>
          </div>

          <div className="grid-2" style={{ gap: '16px' }}>
            <div className="card" style={{ borderLeft: '3px solid var(--chase)' }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--chase)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Chase India — Go-to-Market: Salary Account Partnerships</div>
              <p>Chase India's Trojan Horse: <strong>Salary Account Partnerships with India's top 500 IT and MNC employers.</strong> When a company migrates salary payroll to Chase, every employee gets a zero-fee Chase account auto-created. This bypasses individual acquisition — Chase doesn't wait for customers; it enters their lives via their paycheck. Target: TCS (600K employees), Infosys (340K), Wipro (250K), Accenture India (300K).</p>
            </div>
            <div className="card" style={{ borderLeft: '3px solid var(--jpmorgan)' }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--jpmorgan-dark)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>J.P. Morgan India — Go-to-Market: NRI Referral Network</div>
              <p>India has <strong>32 million NRIs</strong> — many of whom manage family wealth across borders. J.P. Morgan's existing US/UK/Singapore private banking clients with India-origin families become the referral seed. An NRI in New York who banks with JPM Chase refers their family's ₹20Cr domestic portfolio to J.P. Morgan Private India. A network that activates itself from Day 1.</p>
            </div>
          </div>
        </section>

        {/* ── S7: SYSTEM DESIGN ── */}
        <section id="s7">
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 07</div></div>
            <h2 className="s-title">System Design, Regulatory Path &amp; Second-Order Thinking</h2>
            <p className="s-sub">The technical architecture, RBI licensing roadmap, and unintended consequences JPMC must account for before entering India.</p>
          </div>
          <div className="grid-2" style={{ gap: '24px', marginBottom: '28px' }}>
            <div>
              <label>RBI Regulatory Path — 4-Stage Entry</label>
              <div className="rbi-steps">
                <div className="rbi-step done">
                  <div className="rbi-n">1</div>
                  <div className="rbi-body"><h5>Wholly Owned Subsidiary (WOS) License Application</h5><p>Apply to RBI under the 2013 WOS banking framework. Minimum capital: ₹500 Cr (recommend ₹2,500 Cr for credibility). Timeline: 18–24 months for approval.</p></div>
                </div>
                <div className="rbi-step">
                  <div className="rbi-n">2</div>
                  <div className="rbi-body"><h5>Priority Sector Lending (PSL) Compliance</h5><p>All Indian banks must allocate 40% of Adjusted Net Bank Credit to agriculture, MSME, and affordable housing. Chase India's MSME lending product fulfils this obligation.</p></div>
                </div>
                <div className="rbi-step">
                  <div className="rbi-n">3</div>
                  <div className="rbi-body"><h5>Data Localisation (RBI Circular, 2018)</h5><p>All payment data must be stored exclusively on India servers. AWS Mumbai + Hyderabad regions designated. Separate data architecture for J.P. Morgan wealth management (SEBI jurisdiction).</p></div>
                </div>
                <div className="rbi-step">
                  <div className="rbi-n">4</div>
                  <div className="rbi-body"><h5>NPCI / UPI Integration</h5><p>Mandatory NPCI membership for UPI participation. Chase India applies as a Third-Party Application Provider (TPAP) initially, graduating to full UPI member bank.</p></div>
                </div>
              </div>
            </div>
            <div>
              <label>Technical Architecture — Chase India Core Systems</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div className="sys-box blue" style={{ flex: 1 }}><div className="sys-num">1</div><h5>Mobile App (React Native)</h5><p>Single codebase for iOS + Android. Offline-first architecture. UPI deep integration via NPCI APIs.</p></div>
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '18px', padding: '0 3px' }}>→</div>
                  <div className="sys-box" style={{ flex: 1 }}><div className="sys-num">2</div><h5>API Gateway + Load Balancer</h5><p>AWS Mumbai region. 99.99% uptime SLA. Sub-100ms P99 latency for core banking operations.</p></div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div className="sys-box" style={{ flex: 1 }}><div className="sys-num">3</div><h5>Core Banking System (CBS)</h5><p>Temenos T24 localised for India — handles NEFT, IMPS, RTGS, UPI, salary credits, TDS, Form 26AS.</p></div>
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '18px', padding: '0 3px' }}>→</div>
                  <div className="sys-box blue" style={{ flex: 1 }}><div className="sys-num">4</div><h5>Compass AI Engine</h5><p>ML pipeline: transaction categorisation → spending insights → goal recommendations → nudge scheduler.</p></div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div className="sys-box gld" style={{ flex: 1 }}><div className="sys-num">5</div><h5>India Credit Scoring</h5><p>CIBIL + Experian + alternative data (UPI transaction velocity, salary regularity) for credit decisions.</p></div>
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '18px', padding: '0 3px' }}>→</div>
                  <div className="sys-box gld" style={{ flex: 1 }}><div className="sys-num">6</div><h5>Chase → J.P. Morgan Bridge</h5><p>Wealth score tracker monitors Chase customers' growing AUM. At ₹3Cr+ net worth, auto-triggers J.P. Morgan Private onboarding invitation.</p></div>
                </div>
              </div>
            </div>
          </div>
          <label>Second-Order Thinking — Unintended Consequences</label>
          <div className="grid-3" style={{ gap: '14px' }}>
            {[
              ['🏦 Incumbent Retaliation — Fee Wars','Chase India\'s zero-fee model may force HDFC and Axis to eliminate minimum balance charges industry-wide — compressing margins for all players. JPMC must be capitalised for a 3-year customer acquisition loss before profitability.'],
              ['🧠 India\'s Best Banking Talent Drain','JPMC offering US-benchmarked compensation will attract India\'s top product, engineering, and relationship management talent from HDFC, Kotak, and SBI — accelerating an existing talent crisis and drawing potential political friction.'],
              ['🏛️ Political &amp; Regulatory Pushback','A $3.9T-balance-sheet foreign bank entering Indian retail banking will raise national sovereignty concerns. RBI and finance ministry may impose additional capital buffers, branch opening mandates, or PSL obligations.'],
              ['📱 UPI Ecosystem Disruption Risk','Chase India\'s superior UX may pull users from PhonePe and Google Pay\'s banking-adjacent experiences, triggering competitive friction with India\'s dominant UPI TSPs — who may lobby NPCI to delay Chase\'s full NPCI membership.'],
              ['💸 The NRI Paradox','J.P. Morgan India\'s success in facilitating NRI-to-India wealth transfers may reduce repatriation to Indian government securities — drawing RBI scrutiny if capital outflows to J.P. Morgan global products become macroeconomically significant.'],
              ['🎯 The Cross-Subsidisation Risk','If Chase India\'s zero-fee economics are subsidised by J.P. Morgan Private profits, a slowdown in HNI acquisition creates pressure. Chase India must become independently profitable within 3 years.'],
            ].map(([h,p]) => (
              <div className="so-card" key={String(h)}><h4 dangerouslySetInnerHTML={{ __html: h }} /><p>{p}</p></div>
            ))}
          </div>
        </section>

        {/* ── S8: GTM EXECUTION PLAN — NEW SECTION ── */}
        <section id="s8" style={{ background: 'var(--paper)' }}>
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 08</div></div>
            <h2 className="s-title">GTM Execution Plan</h2>
            <p className="s-sub">A phased, city-first go-to-market strategy with explicit channel mix, CAC assumptions, partnership conversion funnels, and a competitive response playbook for Day-1 incumbent retaliation.</p>
          </div>

          {/* Phase 1 */}
          <div className="gtm-phase">
            <div className="gtm-phase-head p1">
              <div className="gtm-phase-num">01</div>
              <div>
                <div className="gtm-phase-title">Foundation &amp; Regulatory Sprint</div>
                <div className="gtm-phase-period">Months 1–18 · Pre-Launch</div>
              </div>
            </div>
            <div className="gtm-phase-body">
              <div className="gtm-grid">
                <div className="gtm-block">
                  <h5>Regulatory &amp; Legal</h5>
                  <ul>
                    <li>File WOS banking license with RBI (Month 1)</li>
                    <li>Apply for SEBI Category I Merchant Banker registration for J.P. Morgan Private</li>
                    <li>Engage NPCI for TPAP (Third-Party App Provider) UPI integration</li>
                    <li>Appoint India-specific regulatory affairs team (ex-RBI, ex-SEBI hires)</li>
                    <li>Launch Federal Bank / Yes Bank co-branding partnership as interim GTM vehicle while WOS pending</li>
                  </ul>
                </div>
                <div className="gtm-block">
                  <h5>Team &amp; Infrastructure</h5>
                  <ul>
                    <li>Hire 200-person India product + engineering team (HQ: Bengaluru)</li>
                    <li>Build Temenos T24 CBS localisation with India tax and UPI stack</li>
                    <li>Set up AWS Mumbai + Hyderabad data infrastructure (data localisation compliance)</li>
                    <li>Hire 50 J.P. Morgan Private Advisors from Kotak Private, HDFC Private, Julius Baer India</li>
                    <li>Establish J.P. Morgan India Advisory Council: 10 prominent Indian promoters, ex-govt figures</li>
                  </ul>
                </div>
                <div className="gtm-block">
                  <h5>Pre-Launch Brand Building</h5>
                  <ul>
                    <li>Waitlist launch: "Chase India — Coming Soon" with referral loop (target: 500K signups pre-launch)</li>
                    <li>Seed J.P. Morgan Private awareness via invite-only webinars for Indian CXO and promoter community</li>
                    <li>Anchor PR: JPMC India partnership announcement at Nasscom, CII, and RBI Banker's Club</li>
                    <li>NRI activation: outreach to 50K existing JPM Chase US clients with India-origin households</li>
                  </ul>
                </div>
              </div>
              <div className="gtm-kpi">
                <div className="gtm-kpi-item">Target: <strong>500K waitlist</strong></div>
                <div className="gtm-kpi-item">CAC (pre-launch): <strong>₹0</strong> (organic waitlist)</div>
                <div className="gtm-kpi-item">Cities preparing for launch: <strong>Bengaluru, Mumbai, Hyderabad, Delhi, Pune</strong></div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="gtm-phase">
            <div className="gtm-phase-head p2">
              <div className="gtm-phase-num">02</div>
              <div>
                <div className="gtm-phase-title">City-First Beachhead Launch</div>
                <div className="gtm-phase-period">Months 19–30 · Year 2</div>
              </div>
            </div>
            <div className="gtm-phase-body">
              <div className="grid-2" style={{ gap: '20px', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--chase)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Chase India: Launch Sequence</div>
                  <div className="rbi-steps">
                    <div className="rbi-step done">
                      <div className="rbi-n" style={{ background: 'var(--chase)', width: '28px', height: '28px', fontSize: '11px' }}>1</div>
                      <div className="rbi-body"><h5>City 1: Bengaluru (Month 19)</h5><p><strong>Why first:</strong> Highest IT concentration globally per capita. TCS, Infosys, Wipro all HQ'd here. 2.1M tech professionals = Chase's highest-density target. Deploy salary partnership with top 10 IT employers. Target 200K active accounts in 90 days.</p></div>
                    </div>
                    <div className="rbi-step">
                      <div className="rbi-n" style={{ width: '28px', height: '28px', fontSize: '11px' }}>2</div>
                      <div className="rbi-body"><h5>City 2: Hyderabad (Month 22)</h5><p><strong>Why second:</strong> HITEC City — India's second IT hub. Lower cost of living than Bengaluru = higher savings rate = better ARPU. Target: 150K accounts. Add Accenture India, Deloitte India as salary partners.</p></div>
                    </div>
                    <div className="rbi-step">
                      <div className="rbi-n" style={{ width: '28px', height: '28px', fontSize: '11px' }}>3</div>
                      <div className="rbi-body"><h5>City 3+: Mumbai, Delhi, Pune (Month 25–30)</h5><p>Mumbai: financial services + MNC employees. Delhi: government adjacent sector + consulting. Pune: second IT hub. Channel: salary partnerships + LinkedIn campaign targeting "actively looking" professionals at HDFC-payroll companies.</p></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--jpmorgan-dark)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>J.P. Morgan Private: Parallel Launch</div>
                  <div className="rbi-steps">
                    <div className="rbi-step done" style={{ borderColor: 'rgba(196,154,42,.25)' }}>
                      <div className="rbi-n" style={{ background: 'var(--jpmorgan)', color: 'var(--ink)', width: '28px', height: '28px', fontSize: '11px' }}>1</div>
                      <div className="rbi-body"><h5>NRI Activation (Month 19–24)</h5><p>Activate 50K existing JPM Chase US/UK/Singapore clients with India-origin households. Warm referral converts at 8–12% (vs. cold outreach at 0.5%). Target: 4,000 HNI clients in first 6 months via referral alone.</p></div>
                    </div>
                    <div className="rbi-step">
                      <div className="rbi-n" style={{ width: '28px', height: '28px', fontSize: '11px' }}>2</div>
                      <div className="rbi-body"><h5>Promoter Family Network (Month 22–30)</h5><p>Invite-only "J.P. Morgan India Private Founders Circle" — 100 founding clients drawn from India's startup ecosystem (Series C+ founders, PE fund GPs). Each founding client gets a dedicated Advisor + access to JPM Global PE deal flow. Word-of-mouth multiplier: each founding client refers average 2.3 new clients within 12 months.</p></div>
                    </div>
                    <div className="rbi-step">
                      <div className="rbi-n" style={{ width: '28px', height: '28px', fontSize: '11px' }}>3</div>
                      <div className="rbi-body"><h5>Chase → JPM Migration Trigger (Month 28+)</h5><p>Chase customers crossing ₹3Cr net worth automatically receive a personalised J.P. Morgan Private invitation from a named Advisor. Conversion target: 2% of Chase base annually. Zero incremental CAC — the flywheel activates.</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ background: 'var(--navy)', borderRadius: '8px', padding: '16px 20px', marginTop: '4px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Channel Mix &amp; CAC Assumptions — Chase India</div>
                <div className="grid-4">
                  {[
                    ['Salary Partnerships','60% of acquisition','₹0 CAC — employer pays onboarding'],
                    ['Waitlist → Activation','20% of acquisition','₹180 CAC (referral incentive)'],
                    ['LinkedIn / Digital','12% of acquisition','₹850 CAC (targeted IT professional ads)'],
                    ['NRI Referral (Chase)','8% of acquisition','₹400 CAC (referral fee to referring NRI)'],
                  ].map(([ch,pct,cac]) => (
                    <div key={String(ch)} style={{ background: 'rgba(255,255,255,.04)', borderRadius: '6px', padding: '12px' }}>
                      <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--jpmorgan)', marginBottom: '4px' }}>{ch}</div>
                      <div style={{ fontSize: '13px', color: '#fff', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>{pct}</div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,.4)', marginTop: '3px' }}>{cac}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '12px', fontSize: '11px', color: 'rgba(255,255,255,.45)', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '10px' }}>
                  Blended CAC (Year 2): <strong style={{ color: 'var(--jpmorgan)' }}>₹310 per acquired Chase customer</strong> — payback period at ₹190/mo profit: <strong style={{ color: 'var(--jpmorgan)' }}>1.6 months</strong>.
                </div>
              </div>
              <div className="gtm-kpi" style={{ marginTop: '12px' }}>
                <div className="gtm-kpi-item">Chase India target (end Year 2): <strong>1.2M active accounts</strong></div>
                <div className="gtm-kpi-item">J.P. Morgan Private target (end Year 2): <strong>6,000 HNI clients</strong></div>
                <div className="gtm-kpi-item">Combined AUM target: <strong>₹45,000 Cr</strong></div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="gtm-phase">
            <div className="gtm-phase-head p3">
              <div className="gtm-phase-num">03</div>
              <div>
                <div className="gtm-phase-title">Scale &amp; Moat Building</div>
                <div className="gtm-phase-period">Months 31–60 · Years 3–5</div>
              </div>
            </div>
            <div className="gtm-phase-body">
              <div className="gtm-grid">
                <div className="gtm-block">
                  <h5>Chase India Scale Levers</h5>
                  <ul>
                    <li>Expand salary partnerships to 500 employers (target: 3M captive employees)</li>
                    <li>Launch Chase India SME banking — the MSME owner who uses Chase personal banking gets a business account with ₹0 setup fee and instant GST-integrated invoicing</li>
                    <li>Chase Sapphire India card: target 800K premium card users by Year 5 (₹65/mo contribution per user)</li>
                    <li>Introduce Chase India Mutual Fund marketplace — zero-commission fund distribution; revenue from AMC trail commission (0.3–0.8% AUM)</li>
                    <li>Tier 2 city expansion: Ahmedabad, Kochi, Chandigarh, Coimbatore — targeting IT and MNC satellite offices</li>
                  </ul>
                </div>
                <div className="gtm-block">
                  <h5>J.P. Morgan Private Scale Levers</h5>
                  <ul>
                    <li>Open J.P. Morgan Private Lounges in Mumbai BKC, Delhi CP, Bengaluru MG Road — physical wealth management experience centres (not branches)</li>
                    <li>Launch "J.P. Morgan India Opportunities Fund" — India-focused PE/VC co-investment vehicle for global JPMC clients wanting India exposure; cross-sells domestic HNI clients global products simultaneously</li>
                    <li>Family Office Services for UHNIs (₹25Cr+): full multi-generation family governance, charity structuring, UHNI concierge</li>
                    <li>Academic &amp; startup ecosystem partnerships: IIT, IIM placement tie-ins — offer J.P. Morgan Private accounts to senior placements (₹30L+ salary) before they become HNIs</li>
                  </ul>
                </div>
                <div className="gtm-block">
                  <h5>Flywheel &amp; Lock-In</h5>
                  <ul>
                    <li>The Chase → JPM Private upgrade funnel matures: 2% of 5M Chase customers = 100,000 upgrade triggers annually by Year 5</li>
                    <li>Chase India data flywheel: 5M transaction histories power Compass AI personalisation that no competitor can replicate without the same customer base</li>
                    <li>JPMC Global balance sheet advantage: India HNI clients get access to JPM's $3.9T balance sheet for structured deals — no Indian or boutique private bank can match this</li>
                    <li>NRI global network effect: each satisfied Indian HNI client generates average 1.8 NRI referrals from their diaspora network, compounding the J.P. Morgan Private client base</li>
                  </ul>
                </div>
              </div>
              <div className="gtm-kpi" style={{ background: 'var(--jpmorgan-light)', borderTop: '1px solid rgba(196,154,42,.2)' }}>
                <div className="gtm-kpi-item">Chase India Year 5: <strong>5M active accounts</strong></div>
                <div className="gtm-kpi-item">J.P. Morgan Private Year 5: <strong>35,000 HNI clients</strong></div>
                <div className="gtm-kpi-item">Total AUM Year 5: <strong>₹2.3L Cr</strong></div>
                <div className="gtm-kpi-item">Combined annual revenue: <strong>₹30,000+ Cr</strong></div>
              </div>
            </div>
          </div>

          {/* Competitive Response Playbook */}
          <div style={{ marginTop: '32px' }}>
            <label>Competitive Response Playbook — What Incumbents Will Do &amp; How Chase India Responds</label>
            <div className="table-scroll">
              <table className="cr-table">
                <thead>
                  <tr>
                    <th>Incumbent</th>
                    <th>Likely Retaliation Move</th>
                    <th>Timeline</th>
                    <th>Chase India Counter-Response</th>
                    <th>Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>HDFC Bank</strong></td>
                    <td className="trigger-cell">Cut or eliminate MAB (Minimum Account Balance) charges across all accounts, removing Chase India's core "zero fee" differentiator overnight</td>
                    <td><span className="pill pill-red">Day 1–30 of Chase launch</span></td>
                    <td className="response-cell">Chase India immediately shifts messaging from "zero fees" to "zero fees AND a Compass that tells you where your money goes" — HDFC cannot match the AI financial coaching layer in &lt; 24 months. Chase also drops ₹2,500 joining bonus for every HDFC customer who switches salary account.</td>
                    <td>Fee parity quickly reached across industry (good for consumers). Chase India wins on UX and intelligence, not fees alone.</td>
                  </tr>
                  <tr>
                    <td><strong>HDFC Bank</strong></td>
                    <td className="trigger-cell">Offer IT employers locked-in "HDFC Salary Max" program with ₹500 cashback/employee/month to retain corporate salary accounts, undermining Chase India's B2B acquisition channel</td>
                    <td><span className="pill pill-red">Month 2–6</span></td>
                    <td className="response-cell">Chase India counters with "Chase Employer Zero" — ₹0 payroll processing fee for any company that migrates salary accounts (vs. HDFC charging ₹15–25 per salary credit). Net cost to employer is lower with Chase even after HDFC's cashback. Chase absorbs ₹12 per salary credit as customer acquisition investment (CAC still lower than digital channels).</td>
                    <td>Corporate partnership war is won on economics, not brand. Chase India can subsidise for 18 months given JPMC's balance sheet.</td>
                  </tr>
                  <tr>
                    <td><strong>SBI</strong></td>
                    <td className="trigger-cell">Petition Finance Ministry to impose branch-opening mandates on foreign banks (1 branch per 100K accounts), creating a CapEx burden Chase India's digital model cannot sustain</td>
                    <td><span className="pill pill-saffron">Month 6–18</span></td>
                    <td className="response-cell">Chase India pre-empts by announcing 50 "Chase Money Centres" (not branches) — service points inside existing co-working spaces (WeWork, Awfis) and post offices. Full compliance with letter of branch regulation while maintaining asset-light model. Simultaneously, engage Ministry of Finance proactively with a "Chase India Job Creation Report" — 10,000 direct jobs, ₹5,000 Cr FDI contribution.</td>
                    <td>Political risk neutralised via proactive engagement. Chase Money Centres become a UX differentiator (premium experience vs. SBI's crowded branches).</td>
                  </tr>
                  <tr>
                    <td><strong>Jio Financial Services</strong></td>
                    <td className="trigger-cell">Launch Jio Bank with zero-fee accounts to 450M JioPhone subscribers simultaneously, making Chase India's TAM irrelevant with a 90× larger distribution network</td>
                    <td><span className="pill pill-saffron">Month 12–24</span></td>
                    <td className="response-cell">Chase India explicitly does NOT compete with Jio's mass market. Chase immediately repositions: "Jio is the bank for India. Chase is the bank for India's global professionals." All Chase India messaging, design, language becomes distinctly premium English-first, globally aspirational. The Chase brand carries weight Jio Financial cannot own — JPMC's 200-year heritage vs. a telco-turned-fintech.</td>
                    <td>Non-overlap strategy succeeds: Jio captures bottom 80% of market; Chase captures the top 10% by income (still 120M people). These are fundamentally different segments with different switching drivers.</td>
                  </tr>
                  <tr>
                    <td><strong>Kotak / Julius Baer India</strong></td>
                    <td className="trigger-cell">Launch aggressive "Stay with Kotak" campaign for HNI clients, offering 25% AUM fee reduction and RM 5-year commitment to prevent J.P. Morgan Private poaching of their client base</td>
                    <td><span className="pill pill-red">Month 6–12</span></td>
                    <td className="response-cell">J.P. Morgan Private does not compete on price — responds with capability, not cost. Invite every prospect to a "J.P. Morgan Global Access Day" — a private session showing live access to JPM PE deal flow, US equity allocation, and JPMC's actual global research reports. Kotak's fee cut means nothing if they cannot match the product. Additionally, publicly commit to a "3-Year Advisor Guarantee" — the same RM for 3 years minimum, targeting Kotak's known RM churn weakness.</td>
                    <td>Product-based differentiation cannot be matched by a fee cut. J.P. Morgan Private acquires Kotak's top decile clients who prioritise capability over cost.</td>
                  </tr>
                  <tr>
                    <td><strong>RBI (Regulatory)</strong></td>
                    <td className="trigger-cell">Issue an RBI circular tightening foreign bank PSL (Priority Sector Lending) obligations to 45% of ANBC (vs. standard 40%), increasing Chase India's obligation to unprofitable rural lending</td>
                    <td><span className="pill pill-saffron">Any time post-launch</span></td>
                    <td className="response-cell">Chase India's MSME lending product is structured to generate genuine P&L at the PSL obligation level (thin margin, but not a loss). Additionally, Chase India establishes a "Chase India Rural Innovation Fund" — a ₹500 Cr MSME lending portfolio managed in partnership with Nabard and existing microfinance NBFCs, fulfilling PSL obligations without direct underwriting risk. This converts a regulatory burden into a PR asset.</td>
                    <td>PSL compliance becomes a brand story, not a burden. Chase India is seen as a responsible foreign bank, pre-empting political criticism.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bottom-banner">
            <strong>GTM North Star:</strong> City-first (Bengaluru → Hyderabad → Mumbai → Delhi → Pune), employer-led acquisition for Chase India (60% of CAC-free customers via salary partnerships), NRI-referral-seeded launch for J.P. Morgan Private. Blended CAC of ₹310 with 1.6-month payback at Chase India's ₹190/mo profit makes this the most capital-efficient bank launch in India's history.
          </div>
        </section>

        {/* ── S9: METRICS ── */}
        <section id="s9">
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 09</div></div>
            <h2 className="s-title">Metrics &amp; Pitfall Mitigation</h2>
            <p className="s-sub">A dual-track measurement framework — one for Chase India's mass-market growth, one for J.P. Morgan Private's AUM trajectory — with known risks and their resolution playbooks.</p>
          </div>
          <div className="grid-2" style={{ gap: '24px', marginBottom: '28px' }}>
            <div>
              <div className="tier-section"><div className="tier-badge tb-chase">Chase India Metrics</div><div className="tier-divider"></div></div>
              <div className="m-table">
                <div className="m-row"><div className="m-type ns">North Star</div><div className="m-desc"><strong>Monthly Active Customers × ARPU</strong> — primary signal that Chase India is growing a profitable banking franchise, not just deposit accounts.</div></div>
                <div className="m-row"><div className="m-type l1">L1</div><div className="m-desc"><strong>% Increase in Salary Account Partnerships</strong> — number of corporate employers live on Chase India payroll (leading indicator for bulk acquisition).</div></div>
                <div className="m-row"><div className="m-type l2">L2</div><div className="m-desc"><strong>% of Users Active on 3+ Features</strong> (Compass + UPI + Savings) · <strong>% Reduction in Churn vs. Month 3 Cohort</strong>.</div></div>
                <div className="m-row"><div className="m-type ac">Activation</div><div className="m-desc"><strong>% Users completing Compass Onboarding in first session</strong> · <strong>Days to first UPI payment</strong> post account opening.</div></div>
                <div className="m-row"><div className="m-type ad">Adoption</div><div className="m-desc"><strong>% Users setting 1+ financial goal within 14 days</strong> · <strong>% Salary accounts with active savings sweep set up</strong>.</div></div>
                <div className="m-row"><div className="m-type en">Engagement</div><div className="m-desc"><strong>Weekly active days per user</strong> · <strong>% Sessions including a Compass interaction</strong> (not just balance check).</div></div>
                <div className="m-row"><div className="m-type re">Retention</div><div className="m-desc"><strong>12-month customer retention rate</strong> · <strong>% Customers upgrading to Chase Sapphire India within 12 months</strong>.</div></div>
                <div className="m-row"><div className="m-type sa">NPS</div><div className="m-desc"><strong>Net Promoter Score</strong> vs. HDFC, Axis, SBI benchmarks · <strong>App Store Rating</strong> (target: 4.7+ in India).</div></div>
              </div>
            </div>
            <div>
              <div className="tier-section"><div className="tier-badge tb-jpm">J.P. Morgan Private Metrics</div><div className="tier-divider"></div></div>
              <div className="m-table">
                <div className="m-row"><div className="m-type ns" style={{ background: 'var(--jpmorgan-dark)' }}>North Star</div><div className="m-desc"><strong>Total AUM Under Management in India</strong> — the definitive measure of J.P. Morgan Private India's scale and client trust.</div></div>
                <div className="m-row"><div className="m-type l1">L1</div><div className="m-desc"><strong>Number of Active HNI / UHNI Clients</strong> · <strong>Average AUM per client</strong> (target: ₹6.5Cr by Year 3).</div></div>
                <div className="m-row"><div className="m-type l2">L2</div><div className="m-desc"><strong>% Clients using Global Portfolio products</strong> · <strong>Advisory fee revenue as % of total revenue</strong>.</div></div>
                <div className="m-row"><div className="m-type ac">Activation</div><div className="m-desc"><strong>Time from first meeting to AUM transfer</strong> (target: ≤45 days) · <strong>% NRI referrals converting to active clients</strong>.</div></div>
                <div className="m-row"><div className="m-type ad">Adoption</div><div className="m-desc"><strong>% Clients with active succession / estate plan</strong> · <strong>% Clients with both India + global portfolio allocation</strong>.</div></div>
                <div className="m-row"><div className="m-type en">Engagement</div><div className="m-desc"><strong>Frequency of Advisor interactions per client per quarter</strong> · <strong>% Clients using the Private Banking dashboard weekly</strong>.</div></div>
                <div className="m-row"><div className="m-type re">Retention</div><div className="m-desc"><strong>Annual AUM Retention Rate</strong> (target: &gt;92%) · <strong>RM tenure per client</strong> (committed 3-year minimum).</div></div>
                <div className="m-row"><div className="m-type sa">Chase → JPM</div><div className="m-desc"><strong>% Chase customers converting to J.P. Morgan Private</strong> — the ladder metric, ultimate proof the dual-brand strategy works.</div></div>
              </div>
            </div>
          </div>
          <label>Possible Pitfalls &amp; Opportunity Responses</label>
          <div className="grid-2" style={{ gap: '14px', marginBottom: '28px' }}>
            <div className="pitfall">
              <div className="p-risk"><strong>Risk 1:</strong> Chase India's Zero-Fee Model Becomes a Zero-Profit Trap<p>If card spend is lower than projected (India is still a cash-heavy society in Tier-2+ cities), interchange revenue may not cover operating costs — creating a structurally loss-making bank.</p></div>
              <div className="p-opp"><strong>Opportunity:</strong> Introduce Chase India Premium (₹199/mo) with exclusive benefits — higher FD rates, premium card, and priority UPI settlement — as an opt-in upgrade. Freemium model with a genuine paid tier prevents zero-fee trap while maintaining mass-market positioning.</div>
            </div>
            <div className="pitfall">
              <div className="p-risk"><strong>Risk 2:</strong> RBI Delays WOS License Beyond 24 Months<p>India's banking regulator is conservative about foreign bank licenses. Political headwinds could extend the approval timeline to 3–5 years, letting Revolut, Nubank, Jio Financial cement their positions first.</p></div>
              <div className="p-opp"><strong>Opportunity:</strong> Launch via a Co-Branding + White-Label Partnership with a mid-sized Indian bank (e.g., Federal Bank, Yes Bank) while the WOS application is in progress. Chase-branded accounts powered by a partner's CBS — legally compliant, brand-building, and day-one customer acquisition begins immediately.</div>
            </div>
            <div className="pitfall">
              <div className="p-risk"><strong>Risk 3:</strong> J.P. Morgan India Faces "Foreign Bank Trust Deficit"<p>Post-2008 and Lehman, India's HNI community is wary of global financial institutions. "Too big to fail globally, but who protects my ₹20Cr in a crisis?" is a real objection — especially from promoter families who remember Citibank and HSBC's India retail exits.</p></div>
              <div className="p-opp"><strong>Opportunity:</strong> Establish a J.P. Morgan India Resilience Fund — a publicly disclosed ₹5,000 Cr capital reserve ring-fenced exclusively for Indian private banking client protection. Marketing this commitment directly addresses the trust deficit and positions J.P. Morgan India as more committed to India than any Indian private bank.</div>
            </div>
            <div className="pitfall">
              <div className="p-risk"><strong>Risk 4:</strong> WhatsApp Banking and Jio Financial Destroy Chase India's UX Moat<p>Jio Financial Services — backed by Reliance's 450M mobile subscribers — could deliver a comparable zero-fee, AI-first banking experience at 10× the distribution scale.</p></div>
              <div className="p-opp"><strong>Opportunity:</strong> Chase India deliberately does NOT chase Jio in Tier-2/3. Chase India targets urban, globally aspirational, English-first professionals — where the "Chase" brand carries weight that "Jio Finance" does not. Position Chase as the banker of India's global professionals; cede the mass rural market to Jio Financial without conflict.</div>
            </div>
          </div>

          {/* Final Summary */}
          <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '36px 40px', color: '#fff' }}>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: '18px' }}>Project Uday — Executive Summary</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.3rem,3vw,30px)', color: '#fff', marginBottom: '22px', lineHeight: 1.25 }}>India is JPMC's last major untapped banking frontier.<br/>The dual-brand strategy is the only move that wins <em style={{ color: 'var(--jpmorgan)' }}>both</em> ends of the market.</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              {[['5M','Chase India Customers by Year 5'],['35K','J.P. Morgan Private Banking Clients'],['₹2.3L Cr','AUM Under Management'],['₹30K Cr','Annual Revenue Run-Rate (Yr 5)'],['#2','JPMC International Market (after UK)']].map(([n,l]) => (
                <div key={l} style={{ textAlign: 'center', borderRight: '1px solid rgba(255,255,255,.1)', paddingRight: '8px' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.5rem,3vw,36px)', color: 'var(--jpmorgan)', fontWeight: 600 }}>{n}</div>
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,.35)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '.8px' }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '20px' }}>
              <div>
                <div style={{ fontSize: '9px', color: 'var(--chase)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', fontWeight: 700 }}>Chase India — The Democratic Bank</div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.45)', lineHeight: 1.6 }}>Zero-fee. UPI-native. AI-powered Compass. Global Mastercard. Salary account partnerships with India's top 500 employers. Built for the 120 million urban Indians who deserve a global-grade bank — and will finally have one.</p>
              </div>
              <div>
                <div style={{ fontSize: '9px', color: 'var(--jpmorgan)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', fontWeight: 700 }}>J.P. Morgan Private India — The Global Anchor</div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.45)', lineHeight: 1.6 }}>India's HNIs and UHNIs finally have an institution that holds their ₹20Cr India portfolio and their $500K US equity position in the same conversation — with a dedicated advisor guaranteed for 3 years. JPMC's global balance sheet. India's finest expertise. One relationship.</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,.08)' }}>
            <a href="/#case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: 'var(--jpmorgan)', color: '#fff', textDecoration: 'none', borderRadius: '6px', fontWeight: 500, fontSize: '14px', cursor: 'pointer' }}>
              ← Explore Other Case Studies
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectUdayCaseStudy;