import * as React from "react";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import ChangeView from './changeDisplayFilter'
import SwitchDate from './changeDateFilter'







export default function MenuListComposition({
  open,
  setOpen,
  anchorRef,
}: {
  open: boolean;
  setOpen: (argument: any) => void;
  anchorRef: any;
}) {
 





  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

 

  return (
    <Stack  direction="row" spacing={4} className=" top-7 left-8 z-10 ">
      <div>
     
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <div className="flex justify-between items-center gap-4 p-2"
                     
                    >
                     <div className="title">
                        Show news :
                     </div>
                     <ChangeView/>
                    </div>

                    <div className="flex justify-between gap-4 p-2"
                     
                    >
                 
                     <div className="title">
                       Sort by newest:
                     </div>
                     <SwitchDate/>
                    </div> 

                    {/* <div className="flex flex-col justify-between gap-4 p-2"

                     >
                  
                      <div className="title">
                        Choose a day:
                      </div>
                      <DatePickerSelect/>
                     </div> */}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
