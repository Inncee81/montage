import React from "react";
import Head from "next/head";
import { Header } from "../src/components/Header";
import { useLocale } from "../src/hooks/useLocale";
import { Button, Container, CssBaseline, Typography } from "@material-ui/core";

export default function Home() {
  const locale = useLocale();
  return (
    <>
      <Head>
        <title>{locale.t.HEAD_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <CssBaseline />

      <Container fixed>
        <div style={{ textAlign: "center" }}>
          <Typography
            component="h1"
            variant="h3"
            style={{ fontWeight: "bold", margin: "200px 0 32px" }}
          >
            {locale.t.LP_H1}
          </Typography>
          <Typography
            component="p"
            variant="body1"
            style={{ marginBottom: 40 }}
          >
            {locale.t.LP_SUB}
          </Typography>
          <div style={{ marginBottom: 120 }}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              size="large"
            >
              {locale.t.LP_MAIN_BUTTON}
            </Button>
          </div>
          <div style={{ marginBottom: 120 }}>
            <Typography
              component="h2"
              variant="h6"
              style={{ marginBottom: 40 }}
            >
              {locale.t.LP_STEP_TITLE}
            </Typography>
            <div>
              <Typography
                component="p"
                variant="h5"
                style={{ marginBottom: 40 }}
              >
                {locale.t.LP_STEP_1}
              </Typography>
            </div>
            <div>
              <Typography
                component="p"
                variant="h5"
                style={{ marginBottom: 40 }}
              >
                {locale.t.LP_STEP_2}
              </Typography>
            </div>
            <div>
              <Typography
                component="p"
                variant="h5"
                style={{ marginBottom: 40 }}
              >
                {locale.t.LP_STEP_3}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
