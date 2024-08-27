import { useFormContext, Controller } from "react-hook-form";
import TextInput from "@/components/TextInput";
import { CardType } from "@/context/CardDetailProvider";
import useSubmit from "@/hooks/useSubmit";
import useCardDetail from "@/hooks/useCardDetail";
import { formatToCardNumber, formatToCVV } from "@/utils/utils";

const ERROR_REQUIRED = "Can't be empty";

function CardDetailForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext<CardType>();

  const { setSubmitted } = useSubmit();
  const { setCard } = useCardDetail();

  function onSubmit(data: CardType) {
    console.log(data);
    setCard(data);
    setSubmitted();
  }

  return (
    <article>
      <h3 className="sr-only">Card detail submission form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 lg:gap-[26px]">
          <div>
            <label htmlFor="name" className="label">
              <span className="block">Cardholder name</span>{" "}
            </label>
            <TextInput
              type="text"
              id="name"
              placeholder="e.g. Jane Appleseed"
              {...register("name", { required: ERROR_REQUIRED })}
              error={errors.name?.message}
            />
          </div>
          <div>
            <label htmlFor="card-number" className="label">
              <span className="block">Card number</span>
            </label>
            <Controller
              control={control}
              name="cardNumber"
              rules={{
                required: ERROR_REQUIRED,
                minLength: {
                  value: 19,
                  message: "Must be valid number",
                },
              }}
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <TextInput
                    ref={ref}
                    type="text"
                    id="card-number"
                    value={value}
                    onChange={(event) =>
                      onChange(formatToCardNumber(event.target.value))
                    }
                    placeholder="e.g. 1234 5678 9876 5432"
                    error={errors.cardNumber?.message}
                  />
                );
              }}
            />
          </div>
          <div className="flex flex-row items-start gap-3">
            <div className="flex w-1/2 flex-col">
              <label htmlFor="exp-month" className="label basis-full">
                <span>Exp. date (MM/YY)</span>
              </label>
              <div className="flex flex-row gap-1">
                <TextInput
                  type="number"
                  id="exp-month"
                  placeholder="MM"
                  {...register("expMonth", {
                    required: ERROR_REQUIRED,
                    min: { value: 1, message: "Not valid" },
                    max: { value: 12, message: "Not valid" },
                  })}
                  error={errors.expMonth?.message}
                />
                <TextInput
                  type="number"
                  id="exp-year"
                  placeholder="YY"
                  {...register("expYear", {
                    required: ERROR_REQUIRED,
                    min: { value: 24, message: "Not valid year" },
                    max: { value: 99, message: "Not valid year" },
                  })}
                  error={errors.expYear?.message}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-col">
              <label htmlFor="cvv" className="label">
                <span>CVV</span>
              </label>
              <Controller
                control={control}
                name="cvv"
                rules={{
                  required: ERROR_REQUIRED,
                  minLength: {
                    value: 3,
                    message: "Must be valid CVV",
                  },
                }}
                render={({ field: { value, onChange, ref } }) => {
                  return (
                    <TextInput
                      ref={ref}
                      type="text"
                      id="cvv"
                      value={value}
                      onChange={(event) => {
                        onChange(formatToCVV(event.target.value));
                      }}
                      placeholder="e.g. 123"
                      error={errors.cvv?.message}
                    />
                  );
                }}
              />
            </div>
          </div>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>
      </form>
    </article>
  );
}
export default CardDetailForm;
