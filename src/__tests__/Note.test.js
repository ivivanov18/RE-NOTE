import React from "react";
import Note from "../components/Note";
import { mount } from "enzyme";
import { unwrap } from "@material-ui/core/test-utils";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createShallow } from "@material-ui/core/test-utils";

// const NoteNaked = unwrap(Note);

// describe("<Note />", () => {
//   it("with shallow", () => {
//     const wrapper = shallow(
//       <NoteNaked title="Note 1" description="Description 1" classes={{}} />
//     );
//     console.log("shallow", wrapper.debug());
//   });

//   it("with mount", () => {
//     const wrapper = mount(
//       <MuiThemeProvider
//         theme={{
//           success: {
//             main: "#fff"
//           }
//         }}
//       >
//         <Note />
//       </MuiThemeProvider>
//     );
//     console.log("mount", wrapper.debug());
//   });
// });

let shallow;

test("Note component snapshot", () => {
  shallow = createShallow();
  const component = shallow(
    <Note title="Note 1" description="Description for note" />
  );
  expect(component).toMatchSnapshot();
});

test("Note component Title", () => {
  shallow = createShallow();
  console.log(shallow);
  const component = shallow(
    <Note title="Note 1" description="Description for note" />
  );
  // expect(component.find(".title").get(0).props.children).toEqual("Note 1");
});

test("Note component Description", () => {
  shallow = createShallow();
  console.log(shallow);

  const component = shallow(
    <Note title="Note 1" description="Description for note" />
  );
  // expect(component.find(".description").get(0).props.children).toEqual(
  //   "Description for note"
  // );
  console.log(component);
});
