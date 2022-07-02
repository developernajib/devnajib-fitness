import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
    <Box mt="80px" bgcolor="#FFF3F4">
        <Stack
            gap="40px"
            sx={{ alignItems: "center" }}
            flexWrap="wrap"
            px="40px"
            pt="24px"
        >
            <img
                src={Logo}
                alt="logo"
                style={{ width: "80px", height: "80px" }}
                title="Health is Wealth"
            />
        </Stack>
        <Typography
            variant="h5"
            sx={{ fontSize: { lg: "18px", xs: "14px" } }}
            mt="41px"
            textAlign="center"
            pb="40px"
        >
            By
            <a
                href="https://www.t.me/developernajib"
                style={{
                    color: "#000",
                    textDecoration: "none",
                    margin: "0 5px",
                }}
            >
                DeveloperNajib
            </a>
            ©2022 All rights reserved.
        </Typography>
    </Box>
);

export default Footer;
