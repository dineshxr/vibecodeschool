"use client"

import { useState } from "react"

const TIP_PRESETS = [10, 15, 18, 20, 25]

export default function TipSplitter() {
  const [bill, setBill] = useState<string>("64.20")
  const [tipPct, setTipPct] = useState<number>(18)
  const [people, setPeople] = useState<number>(3)
  const [roundUp, setRoundUp] = useState<boolean>(true)

  const billNum = Number.parseFloat(bill)
  const valid = Number.isFinite(billNum) && billNum > 0 && people >= 1

  const tipTotal = valid ? (billNum * tipPct) / 100 : 0
  const grandTotal = valid ? billNum + tipTotal : 0
  const rawShare = valid ? grandTotal / people : 0
  const share = roundUp ? Math.ceil(rawShare * 100 + Number.EPSILON) / 100 : rawShare
  // Rounding each share up can overshoot; show what the table actually pays.
  const collected = share * people
  const overshoot = collected - grandTotal

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" })

  return (
    <div className="demo-app">
      <div className="demo-app-grid">
        <div className="demo-field">
          <label htmlFor="ts-bill">Bill amount</label>
          <div className="demo-input-wrap">
            <span className="demo-input-prefix">$</span>
            <input
              id="ts-bill"
              inputMode="decimal"
              value={bill}
              onChange={(e) => setBill(e.target.value.replace(/[^0-9.]/g, ""))}
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="demo-field">
          <label>Tip</label>
          <div className="demo-chip-row">
            {TIP_PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                className={"demo-chip" + (tipPct === p ? " active" : "")}
                onClick={() => setTipPct(p)}
              >
                {p}%
              </button>
            ))}
          </div>
        </div>

        <div className="demo-field">
          <label htmlFor="ts-people">Split between</label>
          <div className="demo-stepper">
            <button
              type="button"
              aria-label="Fewer people"
              onClick={() => setPeople((n) => Math.max(1, n - 1))}
            >
              −
            </button>
            <span id="ts-people">
              {people} {people === 1 ? "person" : "people"}
            </span>
            <button
              type="button"
              aria-label="More people"
              onClick={() => setPeople((n) => Math.min(50, n + 1))}
            >
              +
            </button>
          </div>
        </div>

        <div className="demo-field">
          <label className="demo-check">
            <input
              type="checkbox"
              checked={roundUp}
              onChange={(e) => setRoundUp(e.target.checked)}
            />
            Round each share up to the cent
          </label>
        </div>
      </div>

      <div className="demo-result" aria-live="polite">
        {valid ? (
          <>
            <div className="demo-result-big">
              <span className="demo-result-label">Each person pays</span>
              <span className="demo-result-value">{fmt(share)}</span>
            </div>
            <div className="demo-result-rows">
              <span>
                Tip ({tipPct}%): <strong>{fmt(tipTotal)}</strong>
              </span>
              <span>
                Table total: <strong>{fmt(grandTotal)}</strong>
              </span>
              {roundUp && overshoot > 0.001 && (
                <span>
                  Overpay from rounding: <strong>{fmt(overshoot)}</strong> (tip it)
                </span>
              )}
            </div>
          </>
        ) : (
          <div className="demo-result-empty">Enter a bill amount to split.</div>
        )}
      </div>
    </div>
  )
}
