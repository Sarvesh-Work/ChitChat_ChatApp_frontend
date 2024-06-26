import { Grid } from "@mui/material";
import Title from "../Shared/Title";
import Header from "./Header";

const AppLayout = (WrappedComponent) => {
    const HOC = (props) => {
        return (
            <>
                <Title />
                <Header />
                <Grid container height={"calc(100vh - 4rem)"}>
                    <Grid item sm={4} md={3} sx={{
                        display: { xs: "none", sm: "block" }
                    }} height={"100%"}>
                        first
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                        <WrappedComponent {...props} />
                    </Grid>
                    <Grid item md={4} lg={3} sx={{
                        display: { xs: "none", md: "block" }
                    }} height={"100%"}>
                        Third
                    </Grid>
                </Grid>

            </>
        );
    };



    return HOC;
};

export default AppLayout;