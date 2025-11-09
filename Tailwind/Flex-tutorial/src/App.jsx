import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 
        FLEXBOX REFERENCE PLAYGROUND — by Vedansh
        ------------------------------------------------------------
        This file demonstrates:
        - flex direction (row, column)
        - justify-content (main axis alignment)
        - align-items (cross axis alignment)
        - gap, wrapping, grow/shrink, basis
        - self alignment
        - centering tricks
        ------------------------------------------------------------
      */}

      <div
        className="
          bg-gray-800             /* dark background for contrast */
          text-white              /* white text for readability */
          min-h-screen            /* take full screen height */
          p-6                     /* outer padding around everything */
          flex flex-col           /* vertical layout (column) for all sections */
          gap-6                   /* space between each section */
          font-mono               /* monospace font family */
        "
      >
        {/* =====================================================
            FLEX DIRECTION (ROW) + BASIC ALIGNMENT
        ====================================================== */}
        <section
          className="
            bg-gray-600            /* slightly lighter container background */
            p-4 rounded-xl         /* inner padding and rounded corners */
            flex flex-row          /* arrange children in horizontal row */
            justify-between        /* spread children apart horizontally */
            items-center           /* align items vertically in center */
          "
        >
          <h2 className="font-semibold text-lg">Flex Direction (Row)</h2>

          {/* Three boxes inside a flex row */}
          <div className="flex gap-2">
            {/* Each small box uses flex to center its content */}
            <div className="bg-red-400 w-16 h-16 flex items-center justify-center rounded">
              A
            </div>
            <div className="bg-green-400 w-16 h-16 flex items-center justify-center rounded">
              B
            </div>
            <div className="bg-blue-400 w-16 h-16 flex items-center justify-center rounded">
              C
            </div>
          </div>
        </section>

        {/* =====================================================
            FLEX DIRECTION (COLUMN) + SELF ALIGNMENT
        ====================================================== */}
        <section
          className="
              bg-gray-600 p-4 rounded-xl
              flex flex-col           /* stack children vertically */
              items-center            /* center everything horizontally (cross-axis) */
              gap-3                   /* space between each element */
            "
        >
          <h2 className="font-semibold text-lg">Flex Direction (Column)</h2>

          {/*
              Inner flex container (acts like a "column stack")
              - flex-col → vertical layout
              - items-start → by default, align all children to start (left)
              - gap-3 → space between children
              This block visually demonstrates how "self-*" overrides the parent's alignment.
            */}
          <div className="flex flex-col bg-gray-300 p-4 rounded-lg gap-3 items-start w-64">
            <div className="bg-red-400 h-10 p-2 flex items-center justify-center rounded">
              Default (start)
            </div>

            <div className="bg-green-400 h-10 p-2 flex items-center justify-center rounded self-center">
              self-center
            </div>

            <div className="bg-blue-400 h-10 p-2 flex items-center justify-center rounded self-end w-1/2">
              self-end
            </div>

            <div className="bg-yellow-400 h-10 p-2 flex items-center justify-center rounded self-stretch">
              self-stretch
            </div>
          </div>

          {/*
              Quick Recap (Displayed inline below for easy reference)
              - items-start → aligns *all* children to start (default)
              - self-center → overrides alignment for one element
              - self-end → aligns only that item to end (right)
              - self-stretch → item expands to fill full width
            */}
          <p className="text-sm text-gray-200 italic mt-2">
            Parent controls default alignment (items-start). Individual items
            can override with self-*.
          </p>
        </section>

        {/* =====================================================
            JUSTIFY CONTENT VARIATIONS
        ====================================================== */}
        <section
          className="
            bg-gray-600 p-4 rounded-xl
            flex flex-col gap-4
          "
        >
          <h2 className="font-semibold text-lg"> Justify Content</h2>

          {/* Each row below demonstrates one justify-* behavior */}
          <div className="bg-gray-300 p-2 rounded flex justify-start gap-2">
            <p className="text-black w-40">justify-start</p>
            <div className="bg-red-400 w-10 h-10 rounded"></div>
            <div className="bg-green-400 w-10 h-10 rounded"></div>
            <div className="bg-blue-400 w-10 h-10 rounded"></div>
          </div>

          <div className="bg-gray-300 p-2 rounded flex justify-center gap-2">
            <p className="text-black w-40">justify-center</p>
            <div className="bg-red-400 w-10 h-10 rounded"></div>
            <div className="bg-green-400 w-10 h-10 rounded"></div>
            <div className="bg-blue-400 w-10 h-10 rounded"></div>
          </div>

          <div className="bg-gray-300 p-2 rounded flex justify-between gap-2">
            <p className="text-black w-40">justify-between</p>
            <div className="bg-red-400 w-10 h-10 rounded"></div>
            <div className="bg-green-400 w-10 h-10 rounded"></div>
            <div className="bg-blue-400 w-10 h-10 rounded"></div>
          </div>

          <div className="bg-gray-300 p-2 rounded flex justify-around gap-2">
            <p className="text-black w-40">justify-around</p>
            <div className="bg-red-400 w-10 h-10 rounded"></div>
            <div className="bg-green-400 w-10 h-10 rounded"></div>
            <div className="bg-blue-400 w-10 h-10 rounded"></div>
          </div>

          <div className="bg-gray-300 p-2 rounded flex justify-evenly gap-2">
            <p className="text-black w-40">justify-evenly</p>
            <div className="bg-red-400 w-10 h-10 rounded"></div>
            <div className="bg-green-400 w-10 h-10 rounded"></div>
            <div className="bg-blue-400 w-10 h-10 rounded"></div>
          </div>
        </section>

        {/* =====================================================
            FLEX WRAP + GAP
        ====================================================== */}
        <section
          className="
            bg-gray-600 p-4 rounded-xl flex flex-col gap-2
          "
        >
          <h2 className="font-semibold text-lg"> Flex Wrap & Gap</h2>

          {/* 
            flex-wrap allows items to move to next line when space runs out
            gap-* adds consistent spacing between both rows and columns
          */}
          <div className="bg-gray-300 flex flex-wrap gap-3 p-3 rounded">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="bg-indigo-400 w-24 h-12 flex items-center justify-center rounded"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            FLEX GROW / SHRINK / BASIS
        ====================================================== */}
        <section
          className="
            bg-gray-600 p-4 rounded-xl flex flex-col gap-4
          "
        >
          <h2 className="font-semibold text-lg">Flex Grow / Shrink / Basis</h2>

          {/* GROW example: flex-1 fills remaining space equally */}
          <div className="bg-gray-300 p-2 rounded flex gap-2">
            <div className="bg-blue-400 flex-1 p-2 rounded">
              flex-1 (grows to fill space)
            </div>
            <div className="bg-green-400 w-24 p-2 rounded">
              fixed width (no grow)
            </div>
            <div className="bg-red-400 flex-1 p-2 rounded">
              flex-1 (grows equally)
            </div>
          </div>

          {/* NO SHRINK example: flex-none keeps its width */}
          <div className="bg-gray-300 p-2 rounded flex gap-2 overflow-x-auto">
            <div className="bg-blue-400 flex-none w-64 p-2 rounded">
              flex-none (fixed, no shrink)
            </div>
            <div className="bg-green-400 flex-none w-64 p-2 rounded">
              flex-none (fixed, no shrink)
            </div>
            <div className="bg-red-400 flex-none w-64 p-2 rounded">
              flex-none (fixed, no shrink)
            </div>
          </div>

          {/* BASIS example: starting size for flex item before grow/shrink */}
          <div className="bg-gray-300 p-2 rounded flex gap-2">
            <div className="bg-blue-400 basis-1/3 p-2 rounded">
              basis-1/3 (takes 1/3 width)
            </div>
            <div className="bg-green-400 basis-1/3 p-2 rounded">
              basis-1/3 (takes 1/3 width)
            </div>
            <div className="bg-red-400 basis-1/3 p-2 rounded">
              basis-1/3 (takes 1/3 width)
            </div>
          </div>
        </section>

        {/* =====================================================
            ENTERING (Classic use case)
        ====================================================== */}
        <section
          className="
            bg-gray-600 p-4 rounded-xl
            flex flex-col items-center justify-center
          "
        >
          <h2 className="font-semibold text-lg mb-2">Centering with Flex</h2>

          {/* 
            items-center = vertical centering 
            justify-center = horizontal centering
            combo = perfectly centered content
          */}
          <div className="bg-gray-300 w-64 h-32 flex items-center justify-center rounded text-black">
            Perfectly Centered Box
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
