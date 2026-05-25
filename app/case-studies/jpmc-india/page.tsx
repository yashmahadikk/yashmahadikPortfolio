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
  nav { position: fixed; left: 0; top: 0; width: 230px; height: 100vh; background: var(--navy); display: flex; flex-direction: column; padding: 0; z-index: 100; overflow-y: auto; transition: transform 0.3s ease; }
  @media (max-width: 768px) {
    nav { width: 280px; transform: translateX(-100%); }
    nav.active { transform: translateX(0); }
    .nav-toggle { display: flex !important; }
  }
  @media (min-width: 769px) {
    .nav-toggle { display: none !important; }
  }
  .nav-toggle { position: fixed; top: 16px; left: 16px; width: 40px; height: 40px; background: var(--navy); border: 1px solid rgba(196,154,42,.3); border-radius: 6px; cursor: pointer; align-items: center; justify-content: center; z-index: 99; transition: all .2s; }
  .nav-toggle:hover { background: rgba(0,0,0,.2); }
  .nav-toggle span { width: 20px; height: 2px; background: var(--jpmorgan); display: block; position: relative; transition: all .3s; }
  .nav-toggle.open span { background: #fff; }
  .nav-toggle span::before { content: ''; position: absolute; width: 100%; height: 2px; background: var(--jpmorgan); top: -6px; left: 0; transition: all .3s; }
  .nav-toggle.open span::before { transform: rotate(45deg); top: 0; background: #fff; }
  .nav-toggle span::after { content: ''; position: absolute; width: 100%; height: 2px; background: var(--jpmorgan); bottom: -6px; left: 0; transition: all .3s; }
  .nav-toggle.open span::after { transform: rotate(-45deg); bottom: 0; background: #fff; }
  @media (max-width: 768px) {
    main { margin-left: 0; }
    .cover-left { padding: 20px 16px; }
    .cover-right { display: none; }
    section { padding: 24px 16px; }
    .s-title { font-size: 20px; }
    .s-sub { font-size: 14px; }
    .grid-2 { grid-template-columns: 1fr; }
    .grid-3 { grid-template-columns: 1fr; }
    .grid-4 { grid-template-columns: 1fr 1fr; }
    table { font-size: 11px; width: 100%; overflow-x: auto; display: block; }
    th, td { padding: 8px 10px; whitespace: nowrap; }
    .cover h1 { font-size: 32px; line-height: 1.2; }
    .cover-sub-title { font-size: 16px; }
  }
  nav { position: fixed; left: 0; top: 0; width: 230px; height: 100vh; background: var(--navy); display: flex; flex-direction: column; padding: 0; z-index: 100; overflow-y: auto; transition: transform 0.3s ease; }
  .dual-brand { display: flex; flex-direction: column; gap: 6px; }
  .brand-chase { display: flex; align-items: center; gap: 8px; }
  .brand-jpm { display: flex; align-items: center; gap: 8px; padding-top: 6px; border-top: 1px solid rgba(255,255,255,.08); margin-top: 4px; }
  .b-icon-chase { width: 26px; height: 26px; border-radius: 4px; background: var(--chase); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: #fff; letter-spacing: -1px; font-family: 'Cormorant Garamond', serif; }
  .b-icon-jpm { width: 26px; height: 26px; border-radius: 4px; background: var(--jpmorgan); display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; color: var(--ink); letter-spacing: -0.5px; font-family: 'Cormorant Garamond', serif; }
  .b-name { font-family: 'Cormorant Garamond', serif; font-size: 14px; font-weight: 600; color: #fff; letter-spacing: .3px; }
  .b-sub { font-size: 9px; color: rgba(255,255,255,.35); text-transform: uppercase; letter-spacing: 1.5px; }
  .project-tag { margin-top: 14px; font-size: 9px; color: var(--jpmorgan); text-transform: uppercase; letter-spacing: 2px; font-weight: 600; }
  .nav-items { padding: 16px 0; flex: 1; }
  .nav-item { display: flex; align-items: flex-start; gap: 10px; padding: 9px 20px; cursor: pointer; transition: all .2s; border-left: 2px solid transparent; text-decoration: none; }
  .nav-item:hover, .nav-item.active { background: rgba(255,255,255,.05); border-left-color: var(--jpmorgan); }
  .nav-num { width: 18px; height: 18px; border-radius: 50%; background: rgba(255,255,255,.08); display: flex; align-items: center; justify-content: center; font-size: 8px; font-weight: 700; color: rgba(255,255,255,.4); flex-shrink: 0; margin-top: 2px; font-family: 'Cormorant Garamond', serif; }
  .nav-item.active .nav-num { background: var(--jpmorgan); color: var(--ink); }
  .nav-label { font-size: 10.5px; color: rgba(255,255,255,.45); line-height: 1.35; font-weight: 400; }
  .nav-item.active .nav-label { color: rgba(255,255,255,.9); font-weight: 500; }
  .nav-footer { padding: 16px 20px; border-top: 1px solid rgba(255,255,255,.07); font-size: 9px; color: rgba(255,255,255,.2); line-height: 1.5; }
  main { margin-left: 230px; flex: 1; }
  .cover { min-height: 100vh; background: var(--ink); position: relative; overflow: hidden; display: flex; align-items: stretch; }
  .cover-left { flex: 1; padding: 72px 60px; display: flex; flex-direction: column; justify-content: space-between; position: relative; z-index: 2; }
  .cover-right { width: 340px; background: var(--navy); display: flex; flex-direction: column; border-left: 1px solid rgba(196,154,42,.2); padding: 0; position: relative; z-index: 2; }
  .cover-bg-pattern { position: absolute; inset: 0; z-index: 1; background: radial-gradient(ellipse 50% 70% at 30% 50%, rgba(14,50,112,.5) 0%, transparent 60%), radial-gradient(ellipse 30% 30% at 80% 20%, rgba(196,154,42,.06) 0%, transparent 50%); }
  .cover-eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 32px; }
  .cover-rule { width: 40px; height: 1px; background: var(--jpmorgan); }
  .cover-eyebrow-text { font-size: 10px; color: var(--jpmorgan); text-transform: uppercase; letter-spacing: 3px; font-weight: 500; }
  .cover h1 { font-family: 'Cormorant Garamond', serif; font-size: 66px; line-height: 1.0; color: #fff; font-weight: 600; margin-bottom: 8px; }
  .cover h1 .accent { color: var(--jpmorgan); }
  .cover-sub-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; color: rgba(255,255,255,.4); font-style: italic; margin-bottom: 32px; font-weight: 400; line-height: 1.4; }
  .cover-obj { border: 1px solid rgba(196,154,42,.25); border-left: 3px solid var(--jpmorgan); border-radius: 0 6px 6px 0; padding: 16px 20px; font-size: 13px; color: rgba(255,255,255,.65); line-height: 1.7; margin-bottom: 32px; background: rgba(196,154,42,.04); }
  .cover-obj strong { color: var(--jpmorgan); }
  .cover-tiers { display: flex; gap: 12px; margin-bottom: 40px; }
  .tier-pill { padding: 8px 16px; border-radius: 4px; font-size: 12px; font-weight: 600; letter-spacing: .5px; }
  .tier-chase { background: var(--chase); color: #fff; }
  .tier-jpm { background: var(--jpmorgan); color: var(--ink); }
  .cover-toc { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .toc-row { display: flex; align-items: flex-start; gap: 8px; padding: 7px 10px; background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.06); border-radius: 4px; }
  .toc-n { width: 16px; height: 16px; border-radius: 50%; background: var(--jpmorgan); display: flex; align-items: center; justify-content: center; font-size: 8px; font-weight: 700; color: var(--ink); flex-shrink: 0; margin-top: 1px; font-family: 'Cormorant Garamond', serif; }
  .toc-t { font-size: 10px; color: rgba(255,255,255,.45); line-height: 1.35; }
  .cover-right-head { background: var(--jpmorgan); padding: 20px; font-family: 'Cormorant Garamond', serif; font-size: 11px; font-weight: 600; color: var(--ink); text-transform: uppercase; letter-spacing: 2px; }
  .cover-stat-block { padding: 20px; border-bottom: 1px solid rgba(196,154,42,.15); }
  .cover-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 44px; color: #fff; font-weight: 600; line-height: 1; }
  .cover-stat-unit { font-size: 11px; color: var(--jpmorgan); margin-top: 2px; font-weight: 500; letter-spacing: .5px; }
  .cover-stat-desc { font-size: 11px; color: rgba(255,255,255,.35); margin-top: 4px; line-height: 1.4; }
  .cover-bottom { padding: 20px; border-top: 1px solid rgba(196,154,42,.1); margin-top: auto; }
  .cover-bottom p { font-size: 11px; color: rgba(255,255,255,.3); line-height: 1.5; font-style: italic; }
  section { padding: 72px 60px; border-bottom: 1px solid var(--border); background: var(--cream); }
  section:nth-child(even) { background: var(--paper); }
  .s-header { margin-bottom: 40px; }
  .s-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
  .s-rule { width: 24px; height: 2px; background: var(--jpmorgan); }
  .s-tag { font-size: 9px; font-weight: 700; color: var(--jpmorgan-dark); text-transform: uppercase; letter-spacing: 2px; }
  .s-num { font-size: 9px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 2px; }
  .s-title { font-family: 'Cormorant Garamond', serif; font-size: 36px; color: var(--navy); line-height: 1.15; margin-bottom: 8px; font-weight: 600; }
  .s-sub { font-size: 14px; color: var(--text-mid); line-height: 1.65; max-width: 680px; }
  .bottom-banner { background: var(--navy); color: rgba(255,255,255,.85); padding: 14px 20px; border-radius: 6px; font-size: 12px; margin-top: 36px; border-left: 4px solid var(--jpmorgan); line-height: 1.6; }
  .bottom-banner strong { color: var(--jpmorgan); }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
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
  .seg-wrap { background: var(--white); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
  .seg-head-row { display: grid; grid-template-columns: 140px 1fr 1fr 1fr; background: var(--navy); color: #fff; }
  .seg-head-cell { padding: 10px 14px; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,.6); border-right: 1px solid rgba(255,255,255,.07); }
  .seg-row { display: grid; grid-template-columns: 140px 1fr 1fr 1fr; border-top: 1px solid var(--border); }
  .seg-row:first-of-type { border-top: none; }
  .seg-axis { padding: 12px 14px; background: var(--paper); font-size: 11px; color: var(--text-mid); font-weight: 500; border-right: 1px solid var(--border); display: flex; align-items: center; }
  .seg-cell-inner { padding: 12px 14px; border-right: 1px solid var(--border); font-size: 12px; color: var(--text-mid); }
  .seg-cell-inner.target { background: rgba(196,154,42,.06); }
  .seg-cell-inner.highlight { background: rgba(0,94,184,.05); }
  .seg-cell-inner.rejected { background: var(--paper); opacity: .65; }
  .seg-tag { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 4px; }
  .seg-pct { font-family: 'Cormorant Garamond', serif; font-size: 26px; color: var(--navy); font-weight: 600; line-height: 1; }
  .seg-desc { font-size: 10px; color: var(--text-muted); margin-top: 3px; line-height: 1.35; }
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
  .p-block h4 { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 7px; }
  .p-block li { font-size: 11.5px; color: var(--text-mid); padding-left: 10px; position: relative; list-style: none; line-height: 1.4; margin-bottom: 3px; }
  .p-block li::before { content: '›'; position: absolute; left: 0; color: var(--chase); }
  .jpm-li::before { color: var(--jpmorgan) !important; }
  .quote { border-left: 3px solid var(--jpmorgan); background: var(--jpmorgan-light); border-radius: 0 7px 7px 0; padding: 13px 16px; font-size: 13px; color: var(--text-mid); font-style: italic; line-height: 1.6; }
  .quote.chase-q { border-left-color: var(--chase); background: var(--chase-light); }
  .q-attr { margin-top: 6px; font-size: 10px; font-weight: 600; color: var(--text-muted); font-style: normal; text-transform: uppercase; letter-spacing: .5px; }
  .math-box { background: var(--navy); border-radius: 10px; padding: 24px 28px; color: #fff; }
  .math-box h4 { font-size: 9px; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,.35); margin-bottom: 16px; }
  .math-step { display: flex; align-items: baseline; gap: 10px; padding: 9px 0; border-bottom: 1px solid rgba(255,255,255,.07); }
  .math-step:last-child { border: none; }
  .m-lbl { font-size: 12px; color: rgba(255,255,255,.5); flex: 1; }
  .m-val { font-family: 'Cormorant Garamond', serif; font-size: 24px; color: var(--jpmorgan); white-space: nowrap; font-weight: 600; }
  .m-note { font-size: 10px; color: rgba(255,255,255,.25); }
  .math-result { background: rgba(196,154,42,.12); border: 1px solid rgba(196,154,42,.3); border-radius: 7px; padding: 16px; margin-top: 18px; text-align: center; }
  .r-lbl { font-size: 9px; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,.35); }
  .r-val { font-family: 'Cormorant Garamond', serif; font-size: 48px; color: var(--jpmorgan); font-weight: 600; line-height: 1; }
  .r-sub { font-size: 11px; color: rgba(255,255,255,.4); margin-top: 6px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  thead tr { background: var(--navy); }
  th { padding: 11px 16px; text-align: left; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,.55); }
  td { padding: 11px 16px; border-bottom: 1px solid var(--border); color: var(--text-mid); }
  tr:last-child td { border: none; }
  tr.w td { background: var(--jpmorgan-light); font-weight: 500; color: var(--text); }
  .score-big { font-family: 'Cormorant Garamond', serif; font-size: 24px; color: var(--navy); font-weight: 600; }
  tr.w .score-big { color: var(--jpmorgan-dark); }
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
  .p-cta.jpm { background: var(--jpmorgan); }
  .proto-step { display: flex; flex-direction: column; align-items: center; gap: 8px; flex-shrink: 0; }
  .proto-lbl { font-size: 10px; color: var(--text-mid); text-align: center; max-width: 160px; line-height: 1.3; }
  .proto-arr { color: var(--text-muted); font-size: 22px; margin-top: 55px; }
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
  .moat-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
  .moat-card { border: 1px solid var(--border); border-radius: 7px; padding: 13px; background: var(--white); text-align: center; }
  .moat-card.jpmc { border-color: var(--jpmorgan); border-width: 2px; background: var(--jpmorgan-light); }
  .moat-card .mc-n { font-size: 12px; font-weight: 600; color: var(--text); margin-bottom: 8px; }
  .moat-dot-row { display: flex; justify-content: center; gap: 4px; margin-bottom: 4px; }
  .moat-dot { width: 7px; height: 7px; border-radius: 50%; }
  .md-on { background: var(--jpmorgan); }
  .md-off { background: var(--border); }
  .md-chase { background: var(--chase); }
  .mc-feat { font-size: 9px; color: var(--text-muted); line-height: 1.4; }
  .rbi-steps { display: flex; flex-direction: column; gap: 2px; }
  .rbi-step { display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; background: var(--white); border: 1px solid var(--border); border-radius: 6px; }
  .rbi-step.done { background: var(--jpmorgan-light); border-color: rgba(196,154,42,.25); }
  .rbi-n { width: 24px; height: 24px; border-radius: 50%; background: var(--navy); color: #fff; font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; font-family: 'Cormorant Garamond', serif; }
  .rbi-step.done .rbi-n { background: var(--jpmorgan); color: var(--ink); }
  .rbi-body h5 { font-size: 12px; font-weight: 600; color: var(--text); margin-bottom: 2px; }
  .rbi-body p { font-size: 12px; color: var(--text-mid); line-height: 1.45; }
`;

const ProjectUdayCaseStudy: React.FC = () => {
  const [activeSection, setActiveSection] = useState('cover');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ids = ['cover', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'];
      let cur = 'cover';
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          cur = id;
        }
      });
      setActiveSection(cur);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavClass = (id: string) => {
    return `nav-item ${activeSection === id ? 'active' : ''}`;
  };

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CaseStudyStyles }} />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

      {/* Mobile Toggle Button */}
      <button
        className={`nav-toggle ${navOpen ? 'open' : ''}`}
        onClick={handleNavClick}
        aria-label="Toggle navigation"
      >
        <span></span>
      </button>

      {/* Mobile Overlay */}
      {navOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 50,
            display: 'none'
          }}
          onClick={() => setNavOpen(false)}
          className="md:hidden"
        />
      )}

      {/* ── SIDEBAR ── */}
      <nav className={navOpen ? 'active' : ''} onClick={() => setNavOpen(false)}>
        <div className="nav-crown">
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
        </div>
        <div className="nav-items">
          <a className={getNavClass('cover')} href="#cover"><div className="nav-num">◉</div><div className="nav-label">Overview</div></a>
          <a className={getNavClass('s1')} href="#s1"><div className="nav-num">1</div><div className="nav-label">Business &amp; Product Outcome</div></a>
          <a className={getNavClass('s2')} href="#s2"><div className="nav-num">2</div><div className="nav-label">Market &amp; User Segmentation</div></a>
          <a className={getNavClass('s3')} href="#s3"><div className="nav-num">3</div><div className="nav-label">User Research &amp; Root Cause</div></a>
          <a className={getNavClass('s4')} href="#s4"><div className="nav-num">4</div><div className="nav-label">Problem Framing</div></a>
          <a className={getNavClass('s5')} href="#s5"><div className="nav-num">5</div><div className="nav-label">Solution Ideation</div></a>
          <a className={getNavClass('s6')} href="#s6"><div className="nav-num">6</div><div className="nav-label">Prototyping &amp; Detailing</div></a>
          <a className={getNavClass('s7')} href="#s7"><div className="nav-num">7</div><div className="nav-label">System Design &amp; Constraints</div></a>
          <a className={getNavClass('s8')} href="#s8"><div className="nav-num">8</div><div className="nav-label">Metrics &amp; Pitfall Mitigation</div></a>
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
              <div className="cover-sub-title">A dual-brand strategy: Chase for the middle class.<br/>J.P. Morgan for India's wealthy.</div>
              <div className="cover-obj">
                <strong>Objective:</strong> Acquire <strong>5 million Chase India customers</strong> from HDFC, Axis, and SBI's urban middle-class base within 5 years through a zero-fee, AI-first banking model — while establishing <strong>J.P. Morgan Private Banking India</strong> as the premier wealth management platform for India's 3.5 million HNIs and UHNIs.
              </div>
              <div className="cover-tiers">
                <span className="tier-pill tier-chase">🏦 Chase → Middle Class (₹5L–25L/yr)</span>
                <span className="tier-pill tier-jpm">⬛ J.P. Morgan → HNI / UHNI (₹1Cr+)</span>
              </div>
            </div>
            <div className="cover-toc">
              <div className="toc-row"><div className="toc-n">1</div><div className="toc-t">Business &amp; Product Outcome Mapping</div></div>
              <div className="toc-row"><div className="toc-n">2</div><div className="toc-t">Market Understanding &amp; User Segmentation</div></div>
              <div className="toc-row"><div className="toc-n">3</div><div className="toc-t">User Research &amp; Root Cause Identification</div></div>
              <div className="toc-row"><div className="toc-n">4</div><div className="toc-t">Problem Framing &amp; Impact Mapping</div></div>
              <div className="toc-row"><div className="toc-n">5</div><div className="toc-t">Solution Ideation &amp; Prioritization</div></div>
              <div className="toc-row"><div className="toc-n">6</div><div className="toc-t">Prototyping &amp; Solution Detailing</div></div>
              <div className="toc-row"><div className="toc-n">7</div><div className="toc-t">System Design, Constraints &amp; RBI Path</div></div>
              <div className="toc-row"><div className="toc-n">8</div><div className="toc-t">Metrics &amp; Pitfall Mitigation</div></div>
            </div>
          </div>
          <div className="cover-right">
            <div className="cover-right-head">India Market Snapshot</div>
            <div className="cover-stat-block">
              <div className="cover-stat-num">₹200L Cr</div>
              <div className="cover-stat-unit">Total Retail Banking Deposits</div>
              <div className="cover-stat-desc">India's total deposit base — the world's 4th largest by volume</div>
            </div>
            <div className="cover-stat-block">
              <div className="cover-stat-num">560M</div>
              <div className="cover-stat-unit">Banked Urban Adults</div>
              <div className="cover-stat-desc">With digital smartphone access — the target addressable pool</div>
            </div>
            <div className="cover-stat-block">
              <div className="cover-stat-num">3.5M</div>
              <div className="cover-stat-unit">High Net Worth Individuals</div>
              <div className="cover-stat-desc">Holding ₹1Cr+ investable assets — J.P. Morgan's private banking target</div>
            </div>
            <div className="cover-stat-block">
              <div className="cover-stat-num">$0</div>
              <div className="cover-stat-unit">Current JPMC Retail Revenue in India</div>
              <div className="cover-stat-desc">JPMC has investment banking presence; zero retail or private banking at scale</div>
            </div>
            <div className="cover-bottom">
              <p>India is projected to be the world's 3rd largest economy by 2030. This is JPMC's last window to enter before incumbents fortify the digital moat further.</p>
            </div>
          </div>
        </div>

        {/* ── SECTION 1: BUSINESS & PRODUCT OUTCOME ── */}
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
                <p style={{ fontSize: '13px', lineHeight: 1.65 }}>JPMC generates <strong>$162B in annual revenue globally</strong>. India — the world's most populated nation and 5th largest economy — contributes <strong style={{ color: 'var(--saffron)' }}>near zero to this</strong> from retail or private banking. With Chime, Revolut, and domestic neobanks disrupting globally, a dual-brand India strategy is both an offensive opportunity and a defensive necessity against missing the world's largest emerging banking market.</p>
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

          {/* Unit Economics */}
          <label>Unit Economics: Two-Tier Model Comparison</label>
          <div className="grid-2" style={{ gap: '20px' }}>
            <div>
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

        {/* ── SECTION 2: MARKET & SEGMENTATION ── */}
        <section id="s2" style={{ background: 'var(--paper)' }}>
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 02</div></div>
            <h2 className="s-title">Market Understanding &amp; User Segmentation</h2>
            <p className="s-sub">Mapping India's competitive banking landscape, identifying structural weaknesses in HDFC, Axis, and SBI's offerings, and selecting the highest-conversion target segments for each JPMC tier.</p>
          </div>

          <div className="india-stats">
            <div className="india-stat"><div className="isn">85M</div><div className="isl">HDFC Bank Customers</div></div>
            <div className="india-stat"><div className="isn">500M</div><div className="isl">SBI Account Holders</div></div>
            <div className="india-stat"><div className="isn">30M</div><div className="isl">Axis Bank Customers</div></div>
            <div className="india-stat"><div className="isn">40M</div><div className="isl">Kotak Mahindra</div></div>
            <div className="india-stat"><div className="isn">3.5M</div><div className="isl">HNIs in India</div></div>
            <div className="india-stat"><div className="isn">1.5L</div><div className="isl">Ultra HNIs (₹25Cr+)</div></div>
          </div>

          <div className="grid-2" style={{ gap: '20px', marginBottom: '28px' }}>
            <div>
              <label>Indian Banking Market Share (Retail Deposits)</label>
              <div className="bars" style={{ marginBottom: '16px' }}>
                <div className="bar-row"><div className="bar-lbl">SBI + PSU Banks</div><div className="bar-track"><div className="bar-fill fill-muted" style={{ width: '48%' }}>48%</div></div></div>
                <div className="bar-row"><div className="bar-lbl">HDFC Bank</div><div className="bar-track"><div className="bar-fill fill-navy" style={{ width: '18%' }}>18%</div></div></div>
                <div className="bar-row"><div className="bar-lbl">ICICI Bank</div><div className="bar-track"><div className="bar-fill fill-navy" style={{ width: '15%' }}>15%</div></div></div>
                <div className="bar-row"><div className="bar-lbl">Axis + Kotak</div><div className="bar-track"><div className="bar-fill fill-chase" style={{ width: '11%' }}>11%</div></div></div>
                <div className="bar-row"><div className="bar-lbl">Neobanks + Others</div><div className="bar-track"><div className="bar-fill fill-accent" style={{ width: '8%' }}>8%</div></div></div>
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
                <div className="hypo">
                  <div className="hypo-top"><div className="hypo-lbl">H1</div><div className="badge-y">✓ Accepted</div></div>
                  <p>Majority of urban middle-class bank customers (55%+) are "passive loyalists" — staying with their current bank not from satisfaction but from switching inertia.</p>
                </div>
                <div className="hypo">
                  <div className="hypo-top"><div className="hypo-lbl">H2</div><div className="badge-y">✓ Accepted</div></div>
                  <p>Less than 20% of HDFC/Axis middle-class customers understand or use financial planning features. The primary use case is salary receipt + bill payment.</p>
                </div>
                <div className="hypo">
                  <div className="hypo-top"><div className="hypo-lbl">H3</div><div className="badge-y">✓ Accepted</div></div>
                  <p>Over 75% of India's HNIs feel their current private bank does not offer genuine global investment access — only India-allocated products through a "global" wrapper.</p>
                </div>
                <div className="hypo">
                  <div className="hypo-top"><div className="hypo-lbl">H4</div><div className="badge-y">✓ Accepted</div></div>
                  <p>A zero-fee, global-grade UX from a trusted global brand would motivate 1-in-5 surveyed HDFC/SBI/Axis customers to open a Chase account within 6 months.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Segmentation Matrix */}
          <label>Four-Tier Segmentation: Selecting JPMC's Target Segments</label>
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

          <div className="bottom-banner">
            <strong>Target Segments:</strong> (1) Urban middle class earning ₹5L–25L/yr — currently at HDFC/SBI/Axis, digitally native, globally aspirational, high switching propensity for a superior product. (2) HNIs and UHNIs with ₹1Cr+ investable assets — currently underserved by domestic private banks lacking genuine global access.
          </div>
        </section>

        {/* ── SECTION 3: USER RESEARCH ── */}
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
                    <div className="persona-role" style={{ marginTop: '1px' }}>Salary ₹12L/yr · HDFC Primary, SBI Salary Account · 4 yrs banking</div>
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
                      <li>One app for all money — savings, investments, spends</li>
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
                    <div className="persona-role" style={{ marginTop: '1px' }}>Net Worth ₹35Cr · HDFC Private + Julius Baer · Two businesses, NRI son</div>
                    <div className="persona-quote">"My RM at HDFC Private changes every year. Julius Baer knows global markets but doesn't understand India's tax laws. I need someone who can hold both simultaneously — and right now, nobody can."</div>
                  </div>
                </div>
                <div className="persona-body">
                  <div className="persona-row">
                    <div className="p-block"><h4>Frustrations</h4><ul>
                      <li className="jpm-li">Relationship manager turnover every 12–18 months</li>
                      <li className="jpm-li">No genuine global equity / alternatives access from Indian banks</li>
                      <li className="jpm-li">Estate and succession planning done by a separate law firm — not integrated</li>
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

          {/* User Quotes + Root Cause */}
          <div className="grid-2" style={{ gap: '24px' }}>
            <div>
              <label>Voice of the Customer — Middle Class</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: 0 }}>
                <div className="quote chase-q">"I maintain ₹10,000 minimum balance at HDFC just to avoid charges. That money earns nothing. A zero-fee account would free ₹10K of my savings." <div className="q-attr">— 24 yr old, Product Analyst, Pune</div></div>
                <div className="quote chase-q">"I use Google Pay and PhonePe for everything. I open my bank app maybe once a week, just to check salary credit." <div className="q-attr">— 29 yr old, UI/UX Designer, Mumbai</div></div>
                <div className="quote chase-q">"If Chase opened in India — actual Chase with the same app quality as the US version — I'd move my salary account the same day." <div className="q-attr">— 26 yr old, Data Engineer, Hyderabad</div></div>
              </div>
            </div>
            <div>
              <label>Root Cause Analysis — Two Distinct Problems</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="card" style={{ borderLeft: '3px solid var(--chase)' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--chase)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Root Cause — Middle Class (Chase Target)</div>
                  <p>Indian banks profit from <strong>customer inertia, not customer value</strong>. They charge opaque fees, offer generic UX, and provide zero financial guidance — exploiting the switching cost (salary account, EMI mandates) rather than earning loyalty. A zero-fee, globally benchmarked UX breaks this model structurally.</p>
                </div>
                <div className="card" style={{ borderLeft: '3px solid var(--jpmorgan)' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--jpmorgan-dark)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Root Cause — HNI / UHNI (J.P. Morgan Target)</div>
                  <p>India's HNIs are trapped between <strong>domestic banks with limited global access</strong> and <strong>global banks with no India expertise</strong>. No single institution today offers a JPMC-level global balance sheet integrated with deep knowledge of Indian FEMA, taxation, and succession law. This is an unoccupied white space.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: PROBLEM FRAMING ── */}
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
                <div className="card"><h3>Why Now?</h3><p>India has 200M+ digital payment-native adults who have never known a good banking app. Post-HDFC merger with HDFC Bank creating pricing tensions, and SBI's digitisation ceiling — the switching moment is now. A new entrant has a 2-year window before incumbents course-correct.</p></div>
              </div>
              <div className="card navy">
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Jobs to be Done — Ananya (Chase)</div>
                <p style={{ fontSize: '13px', lineHeight: 1.8 }}>When I <em style={{ color: 'rgba(255,255,255,.65)' }}>want to bank smarter and live globally</em>, but struggle because <em style={{ color: 'rgba(255,255,255,.65)' }}>my current bank treats me as a minimum balance number</em>, <strong style={{ color: 'var(--jpmorgan)' }}>help me bank with zero friction, zero hidden fees, and a financial compass</strong> — so that I can grow my money while the bank grows with me.</p>
              </div>
            </div>
            <div>
              <label>Problem Canvas — J.P. Morgan India (HNI/UHNI)</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                <div className="card gold"><h3>True Problem</h3><p>India's wealthy are the world's most underbanked wealthy. They have the capital but lack a single institution that can hold their global portfolio (US equities, PE, global real estate), their India business, and their family succession plan in one integrated relationship. This is a ₹1.5T AUM opportunity going to waste across fragmented providers.</p></div>
                <div className="card"><h3>Why Now?</h3><p>India will add 200,000 new HNI households annually through 2030 as the startup and IT boom matures. First-mover advantage in private banking relationships compounds over decades — an HNI at 45 is a client for 30+ years. Every year of delay is AUM permanently captured by a competitor.</p></div>
              </div>
              <div className="card navy">
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Jobs to be Done — Rajesh (J.P. Morgan)</div>
                <p style={{ fontSize: '13px', lineHeight: 1.8 }}>When I <em style={{ color: 'rgba(255,255,255,.65)' }}>want my wealth to work across India and the world</em>, but struggle because <em style={{ color: 'rgba(255,255,255,.65)' }}>no institution understands both my Indian tax structure and global investment ambitions</em>, <strong style={{ color: 'var(--jpmorgan)' }}>give me a single, trusted institution that is my financial command centre — locally rooted, globally powered.</strong></p>
              </div>
            </div>
          </div>

          {/* Impact Math */}
          <label>Impact Mapping — 5-Year Revenue Projection</label>
          <div className="grid-2" style={{ gap: '20px' }}>
            <div className="math-box">
              <h4>Chase India — 5-Year Math</h4>
              <div className="math-step"><div className="m-lbl">Target addressable pool (urban middle class)</div><div><div className="m-val">120M</div></div></div>
              <div className="math-step"><div className="m-lbl">Assumed conversion rate (switching + new)</div><div><div className="m-val">4.2%</div><div className="m-note">Conservative: 1-in-24 digitally-native HDFC/Axis/SBI users</div></div></div>
              <div className="math-step"><div className="m-lbl">Year 5 active Chase India customers</div><div><div className="m-val">5.0M</div></div></div>
              <div className="math-step"><div className="m-lbl">Profit per active customer / month</div><div><div className="m-val">₹190</div></div></div>
              <div className="math-step"><div className="m-lbl">Annual run-rate profit (Year 5)</div><div><div className="m-val">₹11,400 Cr</div></div></div>
              <div className="math-result">
                <div className="r-lbl">Chase India 5-Year Cumulative Revenue</div>
                <div className="r-val">₹38,000 Cr</div>
                <div className="r-sub">Ramped over 5 years; excludes partnership &amp; ecosystem revenue</div>
              </div>
            </div>
            <div className="math-box">
              <h4>J.P. Morgan Private India — 5-Year Math</h4>
              <div className="math-step"><div className="m-lbl">HNI / UHNI addressable pool</div><div><div className="m-val">3.5M</div></div></div>
              <div className="math-step"><div className="m-lbl">Target market capture — Year 5</div><div><div className="m-val">1%</div><div className="m-note">35,000 active private banking clients</div></div></div>
              <div className="math-step"><div className="m-lbl">Average AUM per client</div><div><div className="m-val">₹6.5Cr</div></div></div>
              <div className="math-step"><div className="m-lbl">Total AUM under management (Year 5)</div><div><div className="m-val">₹2.3L Cr</div></div></div>
              <div className="math-step"><div className="m-lbl">Annual revenue at 0.85% AUM fee</div><div><div className="m-val">₹19,550 Cr</div></div></div>
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

        {/* ���─ SECTION 5: SOLUTION IDEATION ── */}
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
              <p>Enter India solely through a premium credit card product (Chase Sapphire India equivalent) to build brand recognition without the regulatory complexity of a full banking license. Lower barrier to entry but limited strategic value.</p>
              <div className="if-then">
                <strong>Why it falls short:</strong> A credit card alone doesn't capture deposits, doesn't build the salary account relationship, and doesn't create the data flywheel needed to power the Compass AI. It's a billboard, not a bank. The Chase → J.P. Morgan upgrade funnel also requires a full banking relationship.
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
                <strong>Why it falls short:</strong> Ultra-niche — only 1.5L UHNIs in India. Misses the 3.5M HNI market which is the compounding engine. Also fails to build the aspirational funnel from Chase (middle class) → J.P. Morgan (affluent) → J.P. Morgan Private (HNI/UHNI). The ladder strategy is the moat.
              </div>
            </div>
          </div>

          {/* ICE Table */}
          <label>Solution Prioritization — ICE Scoring</label>
          <table style={{ marginBottom: '16px' }}>
            <thead>
              <tr><th>Product Score Elements</th><th>Chase India Zero</th><th>Chase Credit-First</th><th>J.P. Morgan Private</th><th>Family Office Only</th></tr>
            </thead>
            <tbody>
              <tr className="w"><td><strong>Impact</strong> (1–10)</td><td><span className="score-big">9</span></td><td><span className="score-big" style={{ color: 'var(--text-muted)', fontSize: '18px' }}>4</span></td><td><span className="score-big">8</span></td><td><span className="score-big" style={{ color: 'var(--text-muted)', fontSize: '18px' }}>3</span></td></tr>
              <tr><td><strong>Confidence</strong> (0–1)</td><td>0.85</td><td>0.55</td><td>0.90</td><td>0.60</td></tr>
              <tr><td><strong>Effort</strong> (1–10; higher = more effort)</td><td>7</td><td>3</td><td>6</td><td>3</td></tr>
              <tr className="w"><td><strong>Score = (Impact × Confidence) − Effort</strong></td><td><span className="score-big">0.65</span></td><td><span className="score-big" style={{ color: 'var(--text-muted)', fontSize: '18px' }}>−0.8</span></td><td><span className="score-big">1.2</span></td><td><span className="score-big" style={{ color: 'var(--text-muted)', fontSize: '18px' }}>−1.2</span></td></tr>
            </tbody>
          </table>

          <div className="bottom-banner">
            <strong>Selected Solutions:</strong> (1) <strong>Chase India Zero</strong> — zero-fee, UPI-native banking for middle class via salary partnerships. (2) <strong>J.P. Morgan Private Banking India</strong> — global + local private banking for HNI/UHNIs with ₹3Cr+ AUM entry point. Both selected because they serve distinct segments and create a self-reinforcing aspirational ladder.
          </div>
        </section>

        {/* ── SECTION 6: PROTOTYPING ── */}
        <section id="s6" style={{ background: 'var(--paper)' }}>
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 06</div></div>
            <h2 className="s-title">Prototyping &amp; Solution Detailing</h2>
            <p className="s-sub">Mapping the core product experience for each tier — from Chase India's mobile-first zero-fee platform to J.P. Morgan Private's concierge-grade wealth dashboard.</p>
          </div>

          {/* Chase India Prototype */}
          <div className="tier-section" style={{ marginBottom: '20px' }}><div className="tier-badge tb-chase">Chase India — App Experience</div><div className="tier-divider"></div></div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', overflowX: 'auto', paddingBottom: '12px', marginBottom: '32px' }}>
            <div className="proto-step">
              <div className="phone">
                <div className="phone-screen">
                  <div className="p-bar chase">Chase India</div>
                  <div className="p-body">
                    <div className="p-score-card chase">
                      <div className="p-score-lbl">Financial Compass Score</div>
                      <div className="p-score-num">718</div>
                      <div className="p-badge">↑ +14 this month</div>
                    </div>
                    <div className="p-row"><span>💰 Savings</span><span style={{ color: 'var(--chase)' }}>₹84,500</span></div>
                    <div className="p-row"><span>💳 Spent this week</span><span style={{ color: 'var(--saffron)' }}>₹3,240</span></div>
                    <div className="p-row"><span>🎯 Home Goal</span><span>62% on track</span></div>
                    <div className="p-nudge">💡 Salary credited! Transfer ₹5,000 to your Home Fund now.</div>
                  </div>
                </div>
              </div>
              <div className="proto-lbl">Home: Compass Dashboard with goal tracking &amp; salary nudge</div>
            </div>
            <div className="proto-arr">›</div>
            <div className="proto-step">
              <div className="phone">
                <div className="phone-screen">
                  <div className="p-bar chase">← Send / UPI</div>
                  <div className="p-body">
                    <div style={{ fontSize: '9px', fontWeight: 600, color: 'var(--navy)', marginBottom: '5px' }}>Quick Actions</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', marginBottom: '5px' }}>
                      <div style={{ background: 'var(--chase-light)', borderRadius: '5px', padding: '6px', textAlign: 'center', fontSize: '8px', fontWeight: 600, color: 'var(--chase)' }}>📱 UPI Pay</div>
                      <div style={{ background: 'var(--chase-light)', borderRadius: '5px', padding: '6px', textAlign: 'center', fontSize: '8px', fontWeight: 600, color: 'var(--chase)' }}>🌍 Send Abroad</div>
                      <div style={{ background: 'var(--chase-light)', borderRadius: '5px', padding: '6px', textAlign: 'center', fontSize: '8px', fontWeight: 600, color: 'var(--chase)' }}>🏦 NEFT/IMPS</div>
                      <div style={{ background: 'var(--chase-light)', borderRadius: '5px', padding: '6px', textAlign: 'center', fontSize: '8px', fontWeight: 600, color: 'var(--chase)' }}>📲 Request ₹</div>
                    </div>
                    <div style={{ fontSize: '8px', fontWeight: 600, color: 'var(--navy)', marginBottom: '3px' }}>International Fee Comparison</div>
                    <div className="p-row"><span>Chase (you)</span><span style={{ color: 'var(--success)' }}>0.5% markup</span></div>
                    <div className="p-row"><span>HDFC</span><span style={{ color: 'var(--saffron)' }}>3.5% markup</span></div>
                    <div className="p-row"><span>SBI</span><span style={{ color: 'var(--saffron)' }}>3.0% markup</span></div>
                    <div className="p-nudge">✈️ Travelling to the US? Your Chase card saves you ₹2,850 in forex vs. your old HDFC card.</div>
                  </div>
                </div>
              </div>
              <div className="proto-lbl">UPI + Global Transfer with live forex savings indicator</div>
            </div>
            <div className="proto-arr">›</div>
            <div className="proto-step">
              <div className="phone">
                <div className="phone-screen">
                  <div className="p-bar chase">← Spending Insights</div>
                  <div className="p-body">
                    <div style={{ fontSize: '9px', fontWeight: 600, color: 'var(--navy)', marginBottom: '5px' }}>May 2025 — ₹28,450 spent</div>
                    <div style={{ display: 'flex', gap: '2px', height: '40px', alignItems: 'flex-end', marginBottom: '4px' }}>
                      <div style={{ flex: 1, background: 'var(--chase)', borderRadius: '2px 2px 0 0', height: '80%' }}></div>
                      <div style={{ flex: 1, background: 'var(--saffron)', borderRadius: '2px 2px 0 0', height: '60%' }}></div>
                      <div style={{ flex: 1, background: 'var(--jpmorgan)', borderRadius: '2px 2px 0 0', height: '45%' }}></div>
                      <div style={{ flex: 1, background: 'var(--navy)', borderRadius: '2px 2px 0 0', height: '35%' }}></div>
                      <div style={{ flex: 1, background: '#8AA', borderRadius: '2px 2px 0 0', height: '20%' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '6.5px', color: 'var(--text-muted)', marginBottom: '5px' }}>
                      <span>Food</span><span>Shop</span><span>Travel</span><span>Bills</span><span>Other</span>
                    </div>
                    <div className="p-nudge">🔴 Dining 23% over your usual. Adjust next month to stay on Home Goal track.</div>
                    <div style={{ marginTop: '4px', fontSize: '7.5px', fontWeight: 600, color: 'var(--text-muted)' }}>0 hidden fees this month ✓</div>
                  </div>
                </div>
              </div>
              <div className="proto-lbl">Spending Insights: category breakdown + zero-fee transparency</div>
            </div>
            <div className="proto-arr">›</div>
            <div className="proto-step">
              <div className="phone">
                <div className="phone-screen">
                  <div className="p-bar chase">← Upgrade to Chase Sapphire</div>
                  <div className="p-body">
                    <div style={{ background: 'linear-gradient(135deg,#111 0%,#222 100%)', borderRadius: '7px', padding: '8px', marginBottom: '5px' }}>
                      <div style={{ fontSize: '7px', color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.5px' }}>Chase Sapphire India</div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--jpmorgan)', fontFamily: "'Cormorant Garamond', serif" }}>Ananya Krishnan</div>
                      <div style={{ fontSize: '7px', color: 'rgba(255,255,255,.3)', marginTop: '2px' }}>**** **** **** 4291</div>
                    </div>
                    <div className="p-row"><span>Annual fee</span><span style={{ color: 'var(--chase)' }}>₹999/yr</span></div>
                    <div className="p-row"><span>Lounge Access</span><span>✓ 8 free/yr</span></div>
                    <div className="p-row"><span>Forex markup</span><span style={{ color: 'var(--success)' }}>0% (Zero!)</span></div>
                    <div className="p-row"><span>Rewards</span><span>5× on travel</span></div>
                    <div className="p-cta">Upgrade Now — Saves ₹12,400/yr vs HDFC</div>
                  </div>
                </div>
              </div>
              <div className="proto-lbl">Chase Sapphire India — premium card upsell with live savings calc</div>
            </div>
          </div>

          {/* J.P. Morgan Prototype */}
          <div className="tier-section" style={{ marginBottom: '20px' }}><div className="tier-badge tb-jpm">J.P. Morgan Private — Wealth Dashboard</div><div className="tier-divider"></div></div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', overflowX: 'auto', paddingBottom: '12px', marginBottom: '24px' }}>
            <div className="proto-step">
              <div className="phone">
                <div className="phone-screen">
                  <div className="p-bar jpm">J.P. Morgan Private</div>
                  <div className="p-body">
                    <div className="p-score-card jpm">
                      <div className="p-score-lbl">Total Wealth</div>
                      <div className="p-score-num">₹34.8Cr</div>
                      <div className="p-badge">↑ +₹1.2Cr this quarter</div>
                    </div>
                    <div className="p-row"><span>🇮🇳 India Portfolio</span><span>₹21.5Cr</span></div>
                    <div className="p-row"><span>🌍 Global Portfolio</span><span>₹10.2Cr</span></div>
                    <div className="p-row"><span>🏠 Real Estate</span><span>₹3.1Cr</span></div>
                    <div className="p-nudge">📞 Your Advisor Priya calls today at 11AM re: US tech portfolio rebalance.</div>
                  </div>
                </div>
              </div>
              <div className="proto-lbl">Unified wealth view: India + Global in one dashboard</div>
            </div>
            <div className="proto-arr">›</div>
            <div className="proto-step">
              <div className="phone">
                <div className="phone-screen">
                  <div className="p-bar jpm">← Global Investments</div>
                  <div className="p-body">
                    <div style={{ fontSize: '9px', fontWeight: 600, color: '#fff', background: 'var(--navy)', margin: '-8px -8px 6px', padding: '6px 8px' }}>Exclusive to J.P. Morgan Private</div>
                    <div className="p-row"><span>US Equities</span><span style={{ color: 'var(--jpmorgan)' }}>$42,000</span></div>
                    <div className="p-row"><span>JP Morgan PE Fund III</span><span style={{ color: 'var(--jpmorgan)' }}>$18,000</span></div>
                    <div className="p-row"><span>Global REIT Basket</span><span style={{ color: 'var(--jpmorgan)' }}>$12,500</span></div>
                    <div className="p-row"><span>India Midcap PMS</span><span style={{ color: 'var(--jpmorgan)' }}>₹4.2Cr</span></div>
                    <div className="p-nudge" style={{ background: 'rgba(196,154,42,.1)', color: 'var(--jpmorgan-dark)' }}>New: JPM Infrastructure Opportunities Fund — Min ₹50L. Your advisor has reserved allocation.</div>
                  </div>
                </div>
              </div>
              <div className="proto-lbl">Global investment access: PE, REIT, US equities — unavailable elsewhere in India</div>
            </div>
            <div className="proto-arr">›</div>
            <div className="proto-step">
              <div className="phone">
                <div className="phone-screen">
                  <div className="p-bar jpm">← Succession Planning</div>
                  <div className="p-body">
                    <div style={{ fontSize: '9px', fontWeight: 600, color: 'var(--ink)', marginBottom: '5px' }}>Mehta Family Legacy Plan</div>
                    <div className="p-row"><span>Will &amp; Estate</span><span style={{ color: 'var(--success)' }}>✓ Finalised</span></div>
                    <div className="p-row"><span>Son (NRI Transfer)</span><span style={{ color: 'var(--saffron)' }}>In Progress</span></div>
                    <div className="p-row"><span>Trust Structure</span><span style={{ color: 'var(--success)' }}>✓ Active</span></div>
                    <div className="p-row"><span>FEMA Compliance</span><span style={{ color: 'var(--success)' }}>✓ Filed</span></div>
                    <div className="p-nudge" style={{ background: 'rgba(196,154,42,.1)', color: 'var(--jpmorgan-dark)' }}>India-US cross-border transfer: JPM's FEMA experts handle the entire process end-to-end.</div>
                  </div>
                </div>
              </div>
              <div className="proto-lbl">Succession &amp; Estate: India FEMA + global NRI planning — fully integrated</div>
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

        {/* ── SECTION 7: SYSTEM DESIGN ── */}
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
                  <div className="rbi-body"><h5>Wholly Owned Subsidiary (WOS) License Application</h5><p>Apply to RBI under the 2013 WOS banking framework. Minimum capital: ₹500 Cr (recommend ₹2,500 Cr for credibility). Timeline: 18–24 months for approval. JPMC's existing SEBI-registered entities in India accelerate the process.</p></div>
                </div>
                <div className="rbi-step">
                  <div className="rbi-n">2</div>
                  <div className="rbi-body"><h5>Priority Sector Lending (PSL) Compliance</h5><p>All Indian banks must allocate 40% of Adjusted Net Bank Credit to agriculture, MSME, and affordable housing. Chase India's MSME lending product fulfils this — targeting small business owners who are already Chase account holders.</p></div>
                </div>
                <div className="rbi-step">
                  <div className="rbi-n">3</div>
                  <div className="rbi-body"><h5>Data Localisation (RBI Circular, 2018)</h5><p>All payment data must be stored exclusively on servers located in India. AWS Mumbai + Hyderabad regions are designated. Zero data crosses international boundaries for payment processing. Separate data architecture for J.P. Morgan wealth management (SEBI jurisdiction).</p></div>
                </div>
                <div className="rbi-step">
                  <div className="rbi-n">4</div>
                  <div className="rbi-body"><h5>NPCI / UPI Integration</h5><p>Mandatory NPCI membership for UPI participation. Chase India applies as a Third-Party Application Provider (TPAP) initially, graduating to full UPI member bank. Partnership with NPCI's UPI-One World for NRI and international use cases.</p></div>
                </div>
              </div>
            </div>
            <div>
              <label>Technical Architecture — Chase India Core Systems</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div className="sys-box blue" style={{ flex: 1 }}><div className="sys-num">1</div><h5>Mobile App (React Native)</h5><p>Single codebase for iOS + Android. Offline-first architecture for low-connectivity areas. UPI deep integration via NPCI APIs.</p></div>
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '18px', padding: '0 3px' }}>→</div>
                  <div className="sys-box" style={{ flex: 1 }}><div className="sys-num">2</div><h5>API Gateway + Load Balancer</h5><p>AWS Mumbai region. 99.99% uptime SLA. Sub-100ms P99 latency for core banking operations.</p></div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div className="sys-box" style={{ flex: 1 }}><div className="sys-num">3</div><h5>Core Banking System (CBS)</h5><p>Temenos T24 localised for India — handles NEFT, IMPS, RTGS, UPI, salary credits, TDS deductions, Form 26AS integration.</p></div>
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '18px', padding: '0 3px' }}>→</div>
                  <div className="sys-box blue" style={{ flex: 1 }}><div className="sys-num">4</div><h5>Compass AI Engine</h5><p>ML pipeline: transaction categorisation → spending insights → goal recommendations → nudge scheduler. Trained on Indian spending patterns.</p></div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div className="sys-box gld" style={{ flex: 1 }}><div className="sys-num">5</div><h5>India Credit Scoring</h5><p>CIBIL + Experian + alternative data (UPI transaction velocity, salary regularity) for credit decisions. No over-reliance on FICO-style models.</p></div>
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '18px', padding: '0 3px' }}>→</div>
                  <div className="sys-box gld" style={{ flex: 1 }}><div className="sys-num">6</div><h5>Chase → J.P. Morgan Bridge</h5><p>Wealth score tracker monitors Chase customers' growing AUM. At ₹3Cr+ net worth, auto-triggers J.P. Morgan Private onboarding invitation.</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Order */}
          <label>Second-Order Thinking — Unintended Consequences</label>
          <div className="grid-3" style={{ gap: '14px' }}>
            <div className="so-card">
              <h4>🏦 Incumbent Retaliation — Fee Wars</h4>
              <p>Chase India's zero-fee model may force HDFC and Axis to eliminate or reduce their minimum balance charges industry-wide — compressing margins for all players. <strong>JPMC must be capitalised for a 3-year customer acquisition loss before profitability.</strong></p>
            </div>
            <div className="so-card">
              <h4>🧠 India's Best Banking Talent Drain</h4>
              <p>JPMC offering US-benchmarked compensation will attract India's top product, engineering, and relationship management talent from HDFC, Kotak, and SBI — accelerating an existing talent crisis in domestic banking and drawing potential political friction.</p>
            </div>
            <div className="so-card">
              <h4>🏛️ Political &amp; Regulatory Pushback</h4>
              <p>A $3.9T-balance-sheet foreign bank entering Indian retail banking will raise national sovereignty concerns. RBI and finance ministry may impose additional capital buffers, branch opening mandates, or PSL obligations beyond standard requirements. Proactive political engagement is essential pre-launch.</p>
            </div>
            <div className="so-card">
              <h4>📱 UPI Ecosystem Disruption Risk</h4>
              <p>Chase India's superior UX may pull users from PhonePe and Google Pay's banking-adjacent experiences, triggering partnership or competitive friction with India's dominant UPI TSPs — who may lobby NPCI to delay Chase's full NPCI membership.</p>
            </div>
            <div className="so-card">
              <h4>💸 The NRI Paradox</h4>
              <p>J.P. Morgan India's success in facilitating NRI-to-India wealth transfers may reduce repatriation to Indian government securities — drawing RBI scrutiny if capital outflows to J.P. Morgan global products become macroeconomically significant at scale.</p>
            </div>
            <div className="so-card">
              <h4>🎯 The Aspirational Ladder Risk</h4>
              <p>If Chase India's zero-fee economics are subsidised by J.P. Morgan Private profits, a slowdown in HNI acquisition creates cross-subsidisation pressure. Chase India must become independently profitable within 3 years — not permanently dependent on Private Banking margins to survive.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: METRICS ── */}
        <section id="s8" style={{ background: 'var(--paper)' }}>
          <div className="s-header">
            <div className="s-eyebrow"><div className="s-rule"></div><div className="s-num">Section 08</div></div>
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
                <div className="m-row"><div className="m-type l2">L2</div><div className="m-desc"><strong>% Clients using Global Portfolio products</strong> (not just India-domestic) · <strong>Advisory fee revenue as % of total revenue</strong>.</div></div>
                <div className="m-row"><div className="m-type ac">Activation</div><div className="m-desc"><strong>Time from first meeting to AUM transfer</strong> (target: ≤45 days) · <strong>% NRI referrals converting to active clients</strong>.</div></div>
                <div className="m-row"><div className="m-type ad">Adoption</div><div className="m-desc"><strong>% Clients with active succession / estate plan</strong> · <strong>% Clients with both India + global portfolio allocation</strong>.</div></div>
                <div className="m-row"><div className="m-type en">Engagement</div><div className="m-desc"><strong>Frequency of Advisor interactions per client per quarter</strong> · <strong>% Clients using the Private Banking dashboard weekly</strong>.</div></div>
                <div className="m-row"><div className="m-type re">Retention</div><div className="m-desc"><strong>Annual AUM Retention Rate</strong> (target: &gt;92%) · <strong>RM tenure per client</strong> (committed 3-year minimum — a competitive differentiator vs. HDFC Private's 12-month RM churn).</div></div>
                <div className="m-row"><div className="m-type sa">Chase → JPM</div><div className="m-desc"><strong>% Chase customers converting to J.P. Morgan Private</strong> (the ladder metric — ultimate proof the dual-brand strategy works).</div></div>
              </div>
            </div>
          </div>

          {/* Pitfalls */}
          <label>Possible Pitfalls &amp; Opportunity Responses</label>
          <div className="grid-2" style={{ gap: '14px', marginBottom: '28px' }}>
            <div className="pitfall">
              <div className="p-risk"><strong>Risk 1:</strong> Chase India's Zero-Fee Model Becomes a Zero-Profit Trap<p>If card spend is lower than projected (India is still a cash-heavy society in Tier-2+ cities), interchange revenue may not cover operating costs — creating a structurally loss-making bank subsidised by JPM Private profits indefinitely.</p></div>
              <div className="p-opp"><strong>Opportunity:</strong> Introduce Chase India Premium (₹199/mo) with exclusive benefits — higher FD rates, premium card, and priority UPI settlement — as an opt-in upgrade. Freemium model with genuine paid tier prevents zero-fee trap while maintaining the mass-market positioning.</div>
            </div>
            <div className="pitfall">
              <div className="p-risk"><strong>Risk 2:</strong> RBI Delays WOS License Beyond 24 Months<p>India's banking regulator is conservative about foreign bank licenses. Political headwinds around "foreign capital in retail banking" could extend the approval timeline to 3–5 years, letting competitors (Revolut, Nubank, Jio Financial) cement their positions first.</p></div>
              <div className="p-opp"><strong>Opportunity:</strong> Launch via a Co-Branding + White-Label Partnership with a mid-sized Indian bank (e.g., Federal Bank, Yes Bank) while the WOS application is in progress. Chase-branded accounts powered by a partner's CBS — legally compliant, brand-building, and day-one customer acquisition begins immediately.</div>
            </div>
            <div className="pitfall">
              <div className="p-risk"><strong>Risk 3:</strong> J.P. Morgan India Faces "Foreign Bank Trust Deficit"<p>Post-2008 and Lehman, India's HNI community is wary of global financial institutions with India exposure. "Too big to fail globally, but who protects my ₹20Cr in a crisis?" is a real objection — especially from promoter families who remember Citibank and HSBC's India exits from retail banking.</p></div>
              <div className="p-opp"><strong>Opportunity:</strong> Establish a J.P. Morgan India Resilience Fund — a publicly disclosed ₹5,000 Cr capital reserve ring-fenced exclusively for Indian private banking client protection. Marketing this commitment directly addresses the trust deficit and positions J.P. Morgan India as more committed to India than any Indian private bank.</div>
            </div>
            <div className="pitfall">
              <div className="p-risk"><strong>Risk 4:</strong> WhatsApp Banking and Jio Financial Destroy Chase India's UX Moat<p>Jio Financial Services — backed by Reliance's 450M mobile subscribers and WhatsApp's 500M India users — could deliver a comparable zero-fee, AI-first banking experience at 10× the distribution scale. Chase India's superior brand may not overcome Jio's network effect in Tier-2/3 cities.</p></div>
              <div className="p-opp"><strong>Opportunity:</strong> Chase India deliberately does NOT chase Jio in Tier-2/3. Chase India targets urban, globally aspirational, English-first professionals — where the "Chase" brand carries weight that "Jio Finance" does not. Position Chase as the banker of India's global professionals; cede the mass rural market to Jio Financial without conflict.</div>
            </div>
          </div>

          {/* Final Summary */}
          <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '36px 40px', color: '#fff' }}>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: '18px' }}>Project Uday — Executive Summary</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', color: '#fff', marginBottom: '22px', lineHeight: 1.25 }}>India is JPMC's last major untapped banking frontier.<br/>The dual-brand strategy is the only move that wins <em style={{ color: 'var(--jpmorgan)' }}>both</em> ends of the market.</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px', marginBottom: '24px' }}>
              <div style={{ textAlign: 'center', borderRight: '1px solid rgba(255,255,255,.1)', paddingRight: '16px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: 'var(--jpmorgan)', fontWeight: 600 }}>5M</div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,.35)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '.8px' }}>Chase India Customers<br/>by Year 5</div>
              </div>
              <div style={{ textAlign: 'center', borderRight: '1px solid rgba(255,255,255,.1)', paddingRight: '16px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: 'var(--jpmorgan)', fontWeight: 600 }}>35K</div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,.35)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '.8px' }}>J.P. Morgan Private<br/>Banking Clients</div>
              </div>
              <div style={{ textAlign: 'center', borderRight: '1px solid rgba(255,255,255,.1)', paddingRight: '16px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: 'var(--jpmorgan)', fontWeight: 600 }}>₹2.3L Cr</div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,.35)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '.8px' }}>AUM Under<br/>Management</div>
              </div>
              <div style={{ textAlign: 'center', borderRight: '1px solid rgba(255,255,255,.1)', paddingRight: '16px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: 'var(--jpmorgan)', fontWeight: 600 }}>₹30K Cr</div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,.35)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '.8px' }}>Annual Revenue<br/>Run-Rate (Yr 5)</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: 'var(--jpmorgan)', fontWeight: 600 }}>#2</div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,.35)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '.8px' }}>JPMC International<br/>Market (after UK)</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '20px' }}>
              <div>
                <div style={{ fontSize: '9px', color: 'var(--chase)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', fontWeight: 700 }}>Chase India — The Democratic Bank</div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.45)', lineHeight: 1.6 }}>Zero-fee. UPI-native. AI-powered Compass. Global Mastercard. Salary account partnerships with India's top 500 employers. Built for the 120 million urban Indians who deserve a global-grade bank — and will finally have one.</p>
              </div>
              <div>
                <div style={{ fontSize: '9px', color: 'var(--jpmorgan)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', fontWeight: 700 }}>J.P. Morgan Private India — The Global Anchor</div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.45)', lineHeight: 1.6 }}>India's HNIs and UHNIs finally have an institution that holds their ₹20Cr India portfolio and their $500K US equity position in the same conversation — with a dedicated advisor guaranteed for 3 years, not rotated every 12 months. JPMC's global balance sheet. India's finest expertise. One relationship.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default ProjectUdayCaseStudy;
