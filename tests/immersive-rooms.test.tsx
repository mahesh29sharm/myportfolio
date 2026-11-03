import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  GraphicNovelExhibit,
  LivingPosters,
  ProductLab,
  StoryPhoneExhibit,
  SymbolArtifacts,
} from "@/components/ImmersiveRooms";

describe("immersive exhibition interactions", () => {
  it("changes Udgamreads stories and exposes glide controls", async () => {
    const user = userEvent.setup();
    render(<StoryPhoneExhibit />);

    await user.click(screen.getByRole("tab", { name: /Oppenheimer/i }));
    expect(screen.getByRole("heading", { name: "Oppenheimer" })).toBeTruthy();

    await user.click(screen.getByRole("button", { name: /Move forward/i }));
    expect(HTMLElement.prototype.scrollBy).toHaveBeenCalled();
  });

  it("reveals a selected symbol artifact", async () => {
    const user = userEvent.setup();
    render(<SymbolArtifacts />);

    await user.click(screen.getByRole("button", { name: /Growth/i }));
    expect(screen.getByRole("heading", { name: "Growth" })).toBeTruthy();
    expect(screen.getByText(/Ascending form/i)).toBeTruthy();
  });

  it("steps through the Trace product sequence", async () => {
    const user = userEvent.setup();
    render(<ProductLab />);

    await user.click(screen.getByRole("tab", { name: /Write/i }));
    expect(screen.getByRole("heading", { name: "Write" })).toBeTruthy();
    expect(screen.getByAltText("Trace mobile screen: Write")).toBeTruthy();
  });

  it("switches between graphic-novel evidence photographs", async () => {
    const user = userEvent.setup();
    render(<GraphicNovelExhibit />);

    await user.click(screen.getByRole("tab", { name: /Documentary photograph 02/i }));
    expect(screen.getByAltText(/Documentary photograph 02 from the graphic novel archive/i)).toBeTruthy();
  });

  it("accepts pointer movement on living posters without changing the artwork", () => {
    render(<LivingPosters />);
    const einstein = screen.getByAltText("Einstein illustrated poster").closest("article");
    expect(einstein).toBeTruthy();
    fireEvent.pointerMove(einstein!, { clientX: 80, clientY: 100 });
    expect(screen.getByAltText("Einstein illustrated poster")).toBeTruthy();
  });
});
