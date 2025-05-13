import React, { useRef, useState, useEffect } from "react";
import { Paper, PaperProps } from "@mui/material";

interface CustomDraggablePaperProps extends PaperProps {
  bounds: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
}

export function CustomDraggablePaper({
  bounds,
  ...props
}: CustomDraggablePaperProps) {
  const paperRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 250, y: 40 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    const paper = paperRef.current;
    if (
      !paper ||
      !e.target ||
      !(e.target as HTMLElement).closest("#draggable-dialog-title")
    )
      return;

    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    e.preventDefault();
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;

    let newX = e.clientX - offset.current.x;
    let newY = e.clientY - offset.current.y;

    // Clamp within bounds
    const maxX = window.innerWidth - bounds.right;
    const maxY = window.innerHeight - bounds.bottom;
    const minX = bounds.left;
    const minY = bounds.top;

    newX = Math.max(minX, Math.min(newX, maxX));
    newY = Math.max(minY, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <Paper
      {...props}
      ref={paperRef}
      onMouseDown={onMouseDown}
      style={{
        ...props.style,
        position: "absolute",
        top: position.y,
        left: position.x,
        margin: 0,
        cursor: "move",
      }}
    />
  );
}
