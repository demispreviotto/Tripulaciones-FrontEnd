import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../../../features/auth/authSlice";
import { logout } from "../../../features/auth/authSlice";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.auth.message);

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
        navigate("/inicioSesion");
      }
    }
  }, [user]);

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

  const handleLogout = () => {
    try {
      dispatch(logout());
      setTimeout(() => {
        navigate("/inicioSesion");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!user ? null : (
        <>
          <h1>Perfil</h1>
          <div>
            <h2>
              {isEditing ? (
                <input
                  type="text"
                  value={editedState.firstName}
                  onChange={(e) =>
                    handleFieldChange("firstName", e.target.value)
                  }
                  placeholder="Nombre"
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
                  placeholder="Apellido"
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
                  placeholder="Correo"
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
                  placeholder="Teléfono"
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
                  placeholder="Compañía"
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
          <button onClick={handleLogout}>Cerrar Sesión</button>
          {message ? <p>{message}</p> : null}
        </>
      )}
    </>
  );
};

export default Profile;
