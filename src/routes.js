import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

import PokemonList from "./views/PokemonList";
import PokemonOverview from "./views/PokemonOverview";
import MyPokemonList from "./views/MyPokemonList";

export default [
  {
    path: "/PokePedia",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/pokemon-list" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/pokemon-list",
    layout: DefaultLayout,
    component: PokemonList
  },
  {
    path: "/my-pokemon-list",
    layout: DefaultLayout,
    component: MyPokemonList
  },
  {
    exact: true,
    path: "/pokemon-overview/:name",
    layout: DefaultLayout,
    component: PokemonOverview
  }
];
