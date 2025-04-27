# react-navbar-swap-task
Reading and Understanding task is a part of the task

Task:
 When the user visits the website for the first time in a session, the "Reference" and "Community" menu items must swap places.
Website: https://react.dev/
UI:  Figma
Requirements:
The swap should happen only once per session and remain swapped until the session ends.


Only the "Reference" and "Community" menu items should be swapped — no other elements should be affected.


The swap must be handled safely without causing any UI issues or layout breaks across the website.


If either menu item is missing, or if they are not siblings under the same parent, the swap should gracefully fail (no JavaScript errors, no UI damage).


The swap operation should happen smoothly after the DOM loads.


Use clean, maintainable JavaScript code.
The code should be written in a way that it can be tested via the browser console
You don't need to design the whole thing.
Just write a script that can be run in the browser console to swap the menu list.
However, the UI must not break, and all functionality should remain the same.
