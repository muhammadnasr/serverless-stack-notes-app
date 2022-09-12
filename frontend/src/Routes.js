import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound"
import Login from "./containers/Login"
import Signup from "./containers/Signup"
import AddNote from "./containers/AddNote";
import Note from "./containers/Note";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={
          <UnauthenticatedRoute>
            <Login />
          </UnauthenticatedRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <UnauthenticatedRoute>
            <Signup />
          </UnauthenticatedRoute>
        }
      />

      <Route
        path="/notes/new"
        element={
          <AuthenticatedRoute>
            <AddNote />
          </AuthenticatedRoute>
        }
      />

      <Route
        path="/notes/:id"
        element={
          <AuthenticatedRoute>
            <Note />
          </AuthenticatedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}