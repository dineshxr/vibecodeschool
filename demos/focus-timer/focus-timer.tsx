"use client"

import { useEffect, useRef, useState } from "react"

const FOCUS_SECS = 25 * 60
const BREAK_SECS = 5 * 60

type Phase = "focus" | "break"

export default function FocusTimer() {
  const [phase, setPhase] = useState<Phase>("focus")
  const [left, setLeft] = useState(FOCUS_SECS)
  const [running, setRunning] = useState(false)
  const [sessions, setSessions] = useState(0)
  const tickRef = useRef<number | null>(null)

  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => {
      setLeft((s) => {
        if (s > 1) return s - 1
        // Phase flip happens in its own effect to keep this updater pure.
        return 0
      })
    }, 1000)
    tickRef.current = id
    return () => window.clearInterval(id)
  }, [running])

  useEffect(() => {
    if (left !== 0) return
    if (phase === "focus") {
      setSessions((n) => n + 1)
      setPhase("break")
      setLeft(BREAK_SECS)
    } else {
      setPhase("focus")
      setLeft(FOCUS_SECS)
    }
  }, [left, phase])

  const total = phase === "focus" ? FOCUS_SECS : BREAK_SECS
  const pct = ((total - left) / total) * 100
  const mm = String(Math.floor(left / 60)).padStart(2, "0")
  const ss = String(left % 60).padStart(2, "0")

  const reset = () => {
    setRunning(false)
    setPhase("focus")
    setLeft(FOCUS_SECS)
  }

  return (
    <div className="demo-app demo-timer" data-phase={phase}>
      <div className="demo-timer-phase">
        {phase === "focus" ? "Focus" : "Break"} · session {sessions + (phase === "focus" ? 1 : 0) || 1}
      </div>
      <div className="demo-timer-clock" role="timer" aria-live="off">
        {mm}:{ss}
      </div>
      <div
        className="demo-timer-bar"
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={{ width: `${pct}%` }} />
      </div>
      <div className="demo-timer-controls">
        <button type="button" className="btn btn-primary" onClick={() => setRunning((r) => !r)}>
          {running ? "Pause" : left === total ? "Start" : "Resume"}
        </button>
        <button type="button" className="btn btn-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="demo-timer-meta">
        {sessions} focus {sessions === 1 ? "session" : "sessions"} completed · 25 min focus / 5 min
        break
      </div>
    </div>
  )
}
