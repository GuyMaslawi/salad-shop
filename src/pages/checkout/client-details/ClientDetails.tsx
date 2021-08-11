import { Grid } from "@material-ui/core";
import { InputText } from "../../../components";
import { Wrapper } from "./ClientDetailsStyle";

export const ClientDetails = () => {
    return (
        <Wrapper>
            <form>
                <Grid container
                      spacing={2}
                      direction="column">
                    <Grid item xs={12}>
                        <InputText type="text" label="Name" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <InputText type="text" label="Email" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <InputText multiline label="Additional Notes" fullWidth/>
                    </Grid>
                </Grid>
            </form>
        </Wrapper>
    );
};

export default ClientDetails;