import styled from "styled-components";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";
const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

function UpdateSettingsForm() {
  const { data: settings } = useSettings();
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settings ? settings : {};

  const { isUpdating, updateSettingsApi } = useUpdateSettings();
  const { register } = useForm();
  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSettingsApi({ [field]: value });
  }
  if (!settings) return <Spinner />;
  return (
    <Form>
      <FormRow>
        <Label htmlFor="Minimum nights/booking">Minimum nights/booking</Label>
        <Input
          type="number"
          id="min-nights"
          {...register("minBookingLength")}
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="Maximum nights/booking">Maximum nights/booking</Label>
        <Input
          type="number"
          id="max-nights"
          {...register("maxBookingLength")}
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="Maximum guests/booking">Maximum guests/booking</Label>
        <Input
          type="number"
          id="max-guests"
          {...register("maxGuestsPerBooking")}
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="Breakfast price">Breakfast price</Label>
        <Input
          type="number"
          id="breakfast-price"
          {...register("breakfastPrice")}
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
