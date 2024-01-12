import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../../../features/auth/authSlice";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editedState, setEditedState] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    company: user?.company || "",
  });

  useEffect(() => {
    if (!user) {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        dispatch(update(JSON.parse(savedUser)));
      } else {
        navigate("/login");
      }
    }
  }, [user, dispatch, navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFieldChange = (field, value) => {
    setEditedState((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const handleSaveClick = () => {
    try {
      dispatch(update(editedState));
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  return (
    <>
      {!user ? null : (
        <>
          <h1>Profile</h1>
          <div>
            <h2>
              {isEditing ? (
                <input
                  type="text"
                  value={editedState.firstName}
                  onChange={(e) =>
                    handleFieldChange("firstName", e.target.value)
                  }
                />
              ) : (
                editedState.firstName
              )}
            </h2>
            <h3>
              {isEditing ? (
                <input
                  type="text"
                  value={editedState.lastName}
                  onChange={(e) =>
                    handleFieldChange("lastName", e.target.value)
                  }
                />
              ) : (
                editedState.lastName
              )}
            </h3>
            <p>
              {isEditing ? (
                <input
                  type="text"
                  value={editedState.email}
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                />
              ) : (
                editedState.email
              )}
            </p>
            <p>
              {isEditing ? (
                <input
                  type="text"
                  value={editedState.phone}
                  onChange={(e) => handleFieldChange("phone", e.target.value)}
                />
              ) : (
                editedState.phone
              )}
            </p>
            <p>
              {isEditing ? (
                <input
                  type="text"
                  value={editedState.company}
                  onChange={(e) => handleFieldChange("company", e.target.value)}
                />
              ) : (
                editedState.company
              )}
            </p>
          </div>
          {isEditing ? (
            <button onClick={handleSaveClick}>Guardar</button>
          ) : (
            <button onClick={handleEditClick}>Editar</button>
          )}
        </>
      )}
    </>
  );
};

export default Profile;
