import { Grid } from "@material-ui/core";
import { InputText, MainButton } from "../../../components";
import { Title, Wrapper } from "./ClientDetailsStyle";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { schema } from "./schema";
import { useState } from "react";
import ThanksModal from "../thanks-modal/ThanksModal";

export interface IFormInputs {
  name: string;
  email: string;
  additionalNotes: string;
}

const initialValues = {
  name: "",
  email: "",
  additionalNotes: "",
};

export const ClientDetails = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const [customerDetails, setCustomerDetails] =useState<IFormInputs>(initialValues);
  const [open, setOpen] = useState<boolean>(false);

  const onSubmit = (data: IFormInputs) => {
    setCustomerDetails(data);
    setOpen(true);
  };

  return (
    <Wrapper>
      <Title>Your Details:</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <InputText
                  fullWidth
                  label="Full Name"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  inputRef={ref}
                  helperText={errors.name?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <InputText
                  fullWidth
                  label="Email"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  inputRef={ref}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="additionalNotes"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <InputText
                  fullWidth
                  multiline
                  label="Additional Notes"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  inputRef={ref}
                  helperText={errors.additionalNotes?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} container justifyContent="center">
            <MainButton type="submit">Order</MainButton>
          </Grid>
        </Grid>

        <ThanksModal
          open={open}
          setOpen={setOpen}
          customerDetails={customerDetails}
        />
      </form>
    </Wrapper>
  );
};

export default ClientDetails;
