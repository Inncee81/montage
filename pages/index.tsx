import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../src/components/Header";
import { useLocale } from "../src/hooks/useLocale";
import { Button, Container, CssBaseline, Typography } from "@material-ui/core";
import SlidesSvg from "../src/assets/slides.svg";
import RecordSvg from "../src/assets/record.svg";
import ExportVideoSvg from "../src/assets/export_video.svg";
import BalloonCloudSvg from "../src/assets/balloon_cloud.svg";
import BalloonCircleSvg from "../src/assets/balloon_circle.svg";
import BalloonGizaSvg from "../src/assets/balloon_giza.svg";

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
            <Link href={`/presentations/`}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                size="large"
              >
                {locale.t.LP_MAIN_BUTTON}
              </Button>
            </Link>
          </div>
          <div style={{ marginBottom: 120 }}>
            <Typography
              component="h2"
              variant="h6"
              style={{ marginBottom: 40 }}
            >
              {locale.t.LP_STEP_TITLE}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 40
              }}
            >
              <Typography
                component="p"
                variant="h5"
                style={{ marginBottom: 40, marginRight: 16 }}
              >
                {locale.t.LP_STEP_1}
              </Typography>
              <SlidesSvg />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 40
              }}
            >
              <Typography
                component="p"
                variant="h5"
                style={{ marginBottom: 40 }}
              >
                {locale.t.LP_STEP_2}
              </Typography>
              <RecordSvg />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                component="p"
                variant="h5"
                style={{ marginBottom: 40 }}
              >
                {locale.t.LP_STEP_3}
              </Typography>
              <ExportVideoSvg />
            </div>
          </div>
          <div style={{ marginBottom: 120 }}>
            <Typography
              component="h2"
              variant="h6"
              style={{ marginBottom: 40 }}
            >
              {locale.t.LP_USECASE_TITLE}
            </Typography>
            <div>
              <BalloonCircleSvg />
              <Typography
                component="p"
                variant="body1"
                style={{ marginBottom: 40 }}
              >
                {locale.t.LP_USECASE_1_BALLOON}
              </Typography>
              <Typography
                component="p"
                variant="h5"
                style={{ marginBottom: 40 }}
              >
                {locale.t.LP_USECASE_1}
              </Typography>
            </div>
            <div>
              <BalloonCloudSvg />
              <Typography
                component="p"
                variant="body1"
                style={{ marginBottom: 40 }}
              >
                {locale.t.LP_USECASE_2_BALLOON}
              </Typography>
              <Typography
                component="p"
                variant="h5"
                style={{ marginBottom: 40 }}
              >
                {locale.t.LP_USECASE_2}
              </Typography>
            </div>
            <div>
              <BalloonGizaSvg />
              <Typography
                component="p"
                variant="body1"
                style={{ marginBottom: 40 }}
              >
                {locale.t.LP_USECASE_3_BALLOON}
              </Typography>
              <Typography
                component="p"
                variant="h5"
                style={{ marginBottom: 40 }}
              >
                {locale.t.LP_USECASE_3}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
