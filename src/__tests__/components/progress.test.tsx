import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Progress from "../../components/Progress/Progress";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Progress primaryStep={50} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gsDKAQ dfMVTk"
      >
        <div
          class="sc-bdvvtL jPqYqF"
          style="width: 50%;"
        />
      </div>
    </DocumentFragment>
  `);
});
