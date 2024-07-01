import { Grid } from "@mui/material";
import Title from "../Shared/Title";
import Header from "./Header";
import MessageList from "../specific/MessageList";

const AppLayout = (WrappedComponent) => {



    const HOC = (props) => {
        return (
            <>
                <Title />
                
                <Grid container height={"100vh"}>
                    <Grid item sm={1} bgcolor={"black"} sx={{
                          display: { xs: "none", lg: "block" }
                    }}> 
                     <Header/>
                    </Grid>
                    <Grid item sm={4} md={3} sx={{
                        display: { xs: "none", sm: "block" }
                    }} height={"100%"}>
                        <MessageList />
                    </Grid>
                    <Grid item xs={12} sm={8} md={9} lg={8} height={"100%"}>
                        <WrappedComponent {...props} />
                    </Grid>
                </Grid>

            </>
        );
    };



    return HOC;
};

export default AppLayout;