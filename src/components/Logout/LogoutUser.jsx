import React, { useState , useEffect} from "react";
import {
  Grid,
  Box,
  Tooltip,
  MenuItem,
  Typography,
  Avatar,
  Menu,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";

const LogoutUser = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

    fetchUserName();
  }, [user, loading]);

  return (
    <Grid>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
            <Typography textAlign="center">
              {name}
            </Typography>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography
              textAlign="center"
              sx={{
                color: "#000",
                textDecoration: "none",
                background:
                  "linear-gradient(currentColor, currentColor) 50% 100% no-repeat",
                backgroundSize: "0 1px",
                transition: "background 250ms ease 0s",
                "&:hover": {
                  backgroundSize: "100% 1px",
                },
              }}
              onClick={logout}
            >
              Log out
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Grid>
  );
};

export default LogoutUser;
