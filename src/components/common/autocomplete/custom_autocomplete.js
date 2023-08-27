import { Autocomplete, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

export const CusAutoComplete = ({ options, label, sx, mr, label2, mt }) => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: mt ?? "1vh",
        marginRight: mr,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {label2 && (
        <div style={{ width: "100%", overflow: "hidden" }}>{label2}</div>
      )}
      <Autocomplete
        options={options}
        sx={sx}
        getOptionLabel={(option) => option.title}
        PaperComponent={(props) => (
          <Paper
            {...props}
            style={{
              overflow: "hidden",
              background: "#EBECEF",
            }}
          />
        )}
        renderInput={(params) => (
          <TextField
            sx={{ padding: "0px !important", margin: "0px !important" }}
            {...params}
            label={label}
            margin="normal"
          />
         
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.title, inputValue, {
            insideWords: true,
          });
          const parts = parse(option.title, matches);

          return (
            <li
              style={{
                minHeight: "2.5rem",
              }}
              {...props}
            >
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      />
    </div>
  );
};
