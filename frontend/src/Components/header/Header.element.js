/** @format */

import styled from "styled-components";

export const HeaderContainer = styled.h2`
  // background-color: white;
  // align-item: center;
  // border: 1px solid #dee2e6;
  // font-style: none;
  // padding-left: 9rem;
  margin-top: 0rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
  a {
    font-size: 1.5rem;
  }
  .bd-grid {
    max-width: 1624px;
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 2rem;
    width: calc(100% -2rem);
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .nav-decoration {
    text-decoration: none;
  }

  .nav_logo {
    color: #0e2431;
  }

  .nav_item {
    margin-bottom: 2rem;
    padding-left: 1.5rem;
  }

  .nav_link {
    position: relative;
    color: #fff;
    gap: 2rem;
  }
  .nav_link:hover {
    position: relative;
  }
  .active::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0.18rem;
    left: 0;
    top: 2rem;
    background-color: var(--first-color);
  }

  .nav_link:hover::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0.18rem;
    left: 0;
    top: 2rem;
    background-color: var(--first-color);
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .nav_list {
    display: flex;
    // padding-top: 0;
  }
  // .nav_item {
  //   margin-bottom: 2rem;
  // }
  .nav_link {
    position: relative;
    color: blue;
  }
  .nav_toggle {
    color: #0e2431;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const Nav = styled.h2`
  max-width: 1624px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% -2rem);
  margin-left: 1rem;
  margin-right: 1rem;
`;
