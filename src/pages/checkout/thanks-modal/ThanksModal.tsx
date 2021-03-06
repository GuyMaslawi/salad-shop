import { Dialog, Grid, useMediaQuery } from "@material-ui/core";
import { useContext } from "react";
import { useHistory } from "react-router";
import { MainButton } from "../../../components";
import { OrderContext } from "../../../context";
import {
  Details,
  Content,
  OneRow,
  Title,
  SubTitle,
  ConfirmButtonWrap,
  FinalPrice,
} from "./ThanksModalStyle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { IFormInputs } from "../client-details/ClientDetails";
import Delivery from "../../../assets/animations/delivery/Delivery";
import { mobile } from "../../../helpers/screen-sizes";

interface OrderModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  customerDetails: IFormInputs;
}

export const OrderModal = ({
                            open,
                            setOpen,
                            customerDetails,
                            }: OrderModalProps) => {
  const { selectedItems, resetPrice, finalPrice }: any =useContext(OrderContext);
  const isMobile = useMediaQuery(mobile);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
    resetPrice();
    localStorage.clear();
    history.push("/");
  };

  return (
    <Dialog open={open} maxWidth={"lg"}>
      <Grid container>
        {!isMobile && (
          <Grid item md={6}>
            <Delivery />
          </Grid>
        )}
        <Grid item sm={12} md={6}>
          <Content>
            <Title>
              <div>
                <span>Thank You!</span>
                <CheckCircleOutlineIcon color="primary" />
              </div>
              <div>Your Delivery is on the way</div>
            </Title>

            <Details>
              <SubTitle>Your personal Details</SubTitle>

              <div>
                <b>Name:</b> {customerDetails.name}
              </div>
              <div>
                <b>Email:</b> {customerDetails.email}
              </div>
              {customerDetails.additionalNotes && (
                <div>
                  <b>Additional Notes:</b> {customerDetails.additionalNotes}
                </div>
              )}
            </Details>

            <Details>
              <SubTitle>Your Order Details</SubTitle>

              {selectedItems.map((item: any, index: number) => {
                return (
                  <OneRow key={index}>
                    <div>
                      {item.name} ({item.amount})
                    </div>
                    <div>${item.price}</div>
                  </OneRow>
                );
              })}
            </Details>

            <FinalPrice>
              <div>Price:</div>
              <div>${finalPrice}</div>
            </FinalPrice>

            <ConfirmButtonWrap>
              <MainButton onClick={() => handleClose()}>Confirm</MainButton>
            </ConfirmButtonWrap>
          </Content>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default OrderModal;
