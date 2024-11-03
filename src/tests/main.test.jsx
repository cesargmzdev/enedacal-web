import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "../Index";
import React from "react";

describe("Main entrypoint and router", () => {
  it("renders Index component without crashing", () => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);

    render(
      <React.StrictMode>
        <Index />
      </React.StrictMode>,
      { container: root },
    );

    expect(Index).toBeDefined();
  });

  it("renders App component for root route", () => {
    render(
      <React.StrictMode>
        <Index />
      </React.StrictMode>,
    );

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders About component for /about route", () => {
    window.history.pushState({}, "About page", "/about");

    render(
      <React.StrictMode>
        <Index />
      </React.StrictMode>,
    );

    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });

  it("renders Work component for /work route", () => {
    window.history.pushState({}, "Work page", "/work");

    render(
      <React.StrictMode>
        <Index />
      </React.StrictMode>,
    );

    expect(screen.getByText(/Work/i)).toBeInTheDocument();
  });

  it("renders 404 component for unknown route", () => {
    window.history.pushState({}, "Unknown page", "/unknown");

    render(
      <React.StrictMode>
        <Index />
      </React.StrictMode>,
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
