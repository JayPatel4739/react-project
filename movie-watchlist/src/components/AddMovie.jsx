import { useState } from "react"
import Button from "@mui/material/Button"
import MuiModal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import AddIcon from "@mui/icons-material/Add"
import CloseIcon from "@mui/icons-material/Close"

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 480,
  bgcolor: "rgba(10, 10, 25, 0.96)",
  backdropFilter: "blur(24px)",
  border: "1px solid rgba(167, 139, 250, 0.15)",
  borderRadius: "16px",
  boxShadow: "0 32px 64px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(167, 139, 250, 0.06)",
  p: 4,
  outline: "none",
}

const inputSx = {
  mt: 2.5,
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.35)",
    fontSize: "0.85rem",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#a78bfa",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.08)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(167, 139, 250, 0.3)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#a78bfa",
    },
    "& input": {
      color: "#f0f0f0",
      fontSize: "0.9rem",
      padding: "12px 14px",
    },
  },
}

export default function AddMovie({ addMovie }) {
  const [open, setOpen] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    rating: "",
    year: "",
    genre: "",
    duration: "",
    director: "",
    poster: "",
    watched: false,
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit() {
    const newMovie = {
      ...formData,
      id: crypto.randomUUID(),
      rating: Number(formData.rating) || 0,
      year: Number(formData.year) || 0,
    }
    addMovie((prev) => [...prev, newMovie])
    setFormData({
      title: "",
      rating: "",
      year: "",
      genre: "",
      duration: "",
      director: "",
      poster: "",
      watched: false,
    })
    setOpen(false)
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{
          display: "flex",
          mx: "auto",
          mb: 4,
          mt: 1,
          color: "#a78bfa",
          borderColor: "rgba(167, 139, 250, 0.3)",
          borderRadius: "10px",
          px: 3,
          py: 1,
          fontSize: "0.9rem",
          fontWeight: 600,
          letterSpacing: "0.02em",
          textTransform: "none",
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(167, 139, 250, 0.06)",
          transition: "all 0.25s ease",
          "&:hover": {
            backgroundColor: "rgba(167, 139, 250, 0.14)",
            borderColor: "#a78bfa",
            boxShadow: "0 0 24px rgba(167, 139, 250, 0.15)",
          },
        }}
      >
        Add Movie
      </Button>

      <MuiModal
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(6px)",
            },
          },
        }}
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                color: "#f0f0f0",
                fontWeight: 700,
                fontSize: "1.2rem",
                letterSpacing: "-0.01em",
              }}
            >
              Add a new movie
            </Typography>
            <IconButton
              onClick={() => setOpen(false)}
              size="small"
              sx={{ color: "rgba(255,255,255,0.3)", "&:hover": { color: "#f0f0f0" } }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Typography
            sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", mb: 2 }}
          >
            Fill in the details below
          </Typography>

          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            sx={inputSx}
          />
          <TextField
            fullWidth
            label="Rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            sx={inputSx}
          />
          <TextField
            fullWidth
            label="Year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            sx={inputSx}
          />
          <TextField
            fullWidth
            label="Genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            sx={inputSx}
          />
          <TextField
            fullWidth
            label="Duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            sx={inputSx}
          />
          <TextField
            fullWidth
            label="Director"
            name="director"
            value={formData.director}
            onChange={handleChange}
            sx={inputSx}
          />
          <TextField
            fullWidth
            label="Poster URL"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            sx={inputSx}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            sx={{
              mt: 3.5,
              py: 1.4,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              textTransform: "none",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(124, 58, 237, 0.3)",
              transition: "all 0.25s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #8b5cf6 0%, #818cf8 100%)",
                boxShadow: "0 6px 28px rgba(124, 58, 237, 0.45)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Add to Watchlist
          </Button>
        </Box>
      </MuiModal>
    </>
  )
}
