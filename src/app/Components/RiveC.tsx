"use client";

import RiveComponent from "@rive-app/react-canvas";

export default function RiveC() {
  return (
    <div>
      <RiveComponent
        src="https://cdn.rive.app/animations/vehicles.riv"
        stateMachines="bumpy"
        className="w-full h-full opacity-50"
      />
    </div>
  );
}
