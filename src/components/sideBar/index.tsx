import React, { useState } from "react";

import {
  Viewer,
  Cesium3DTileset,
  CameraFlyTo,
  BillboardCollection,
  Billboard,
  Entity,
  BillboardGraphics,
} from "resium";
import {
  Cartesian2,
  Cartesian3,
  Color,
  createGooglePhotorealistic3DTileset,
  defined,
  IonResource,
  Transforms,
} from "cesium";
import img from "../../assets/test.png";
const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  let viewer; // This will be raw Cesium's Viewer object.

  const handleReady = async (tileset) => {
    try {
      const tileset = await createGooglePhotorealistic3DTileset();
      viewer.scene.primitives.add(tileset);
    } catch (error) {
      console.log(`Error loading Photorealistic 3D Tiles tileset.
        ${error}`);
    }
    if (viewer) {
      viewer.zoomTo(tileset);
    }
  };

  const handleButtonClick = async (latitude: number, longitude: number) => {
    // Handle button click event to move camera to specific latitude and longitude
    console.log(`Moving camera to: ${latitude}, ${longitude}`);
    try {
      const tileset = await createGooglePhotorealistic3DTileset();
      viewer.scene.primitives.add(tileset);
    } catch (error) {
      console.log(`Error loading Photorealistic 3D Tiles tileset.
          ${error}`);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`z-10 fixed left-0 top-0 h-full w-60 bg-gray-800 text-white transition-all duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
          <button
            onClick={toggleSidebar}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 cursor-pointer"
          >
            Toggle Sidebar
          </button>
          <div>
            <button
              onClick={() => handleButtonClick(40.7128, -74.006)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-2 cursor-pointer"
            >
              Button 1
            </button>
            <button
              onClick={() => handleButtonClick(34.0522, -118.2437)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2 cursor-pointer"
            >
              Button 2
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div id="cesiumContainer" className="h-screen">
          {/* <Viewer
            full
            ref={(e) => {
              viewer = e && e.cesiumElement;
              const htmlOverlay = document.getElementById("htmlOverlay");
              const scratch = new Cartesian2();
              e?.cesiumElement?.scene.preRender.addEventListener(function () {
                const position = Cartesian3.fromDegrees(
                  126.9661035,
                  37.4012889
                );
                const canvasPosition =
                  viewer.scene.cartesianToCanvasCoordinates(position, scratch);
                if (!!htmlOverlay) {
                  if (defined(canvasPosition)) {
                    htmlOverlay.style.top = `${canvasPosition.y}px`;
                    htmlOverlay.style.left = `${canvasPosition.x}px`;
                    htmlOverlay.style.width = `20px`;
                  }
                }
              });
            }}
          >
            <Cesium3DTileset
              url={IonResource.fromAssetId(5714)}
              onReady={handleReady}
            />
            <CameraFlyTo
              duration={5}
              destination={Cartesian3.fromDegrees(126.9661035, 37.4012889, 100)}
            />
            <BillboardCollection
              modelMatrix={Transforms.eastNorthUpToFixedFrame(
                Cartesian3.fromDegrees(126.9661035, 37.4012889)
              )}
            >
              <Billboard
                color={Color.ORANGE}
                position={new Cartesian3(0.0, 0.0, 0.0)}
              />
            </BillboardCollection>
            <Entity
              description="메타아이즈"
              name="네비웍스"
              point={{ pixelSize: 10 }}
              position={Cartesian3.fromDegrees(126.9661035, 37.4012889, 100)}
            />

            <img
              id="htmlOverlay"
              className="z-10 absolute "
              src={img}
              onClick={() => console.log("click")}
            />
          </Viewer> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
