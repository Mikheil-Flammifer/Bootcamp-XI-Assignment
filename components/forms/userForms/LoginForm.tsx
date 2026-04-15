import { Title } from "@/components/ui/forms/Title";
import { FormInput } from "@/components/ui/forms/FormInput";
import { FormButton } from "@/components/ui/forms/FormButton";
import { useLoginForm } from "@/hooks/useLoginForm";

import { User } from "@/types/user/types"

interface Props {
  onSuccess: (user: User) => void;
  onSwitchToRegister: () => void;
  onClose?: () => void;
}

export default function LoginForm({ onSuccess, onSwitchToRegister, onClose }: Props) {
  const {
    form, errors, loading,
    setField, clearError, handleSubmit,
  } = useLoginForm(onSuccess);

  return (
    <div className="relative flex flex-col items-center w-[460px] h-[481px] rounded-[12px] p-[50px] gap-[12px] bg-white">
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-[24px] h-[24px] flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <svg
            width="13.18" height="13.18" viewBox="0 0 14 14"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: "5.41px", left: "5.41px" }}
          >
            <path d="M1 1L13 13M13 1L1 13" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}

      {/* Frame 488 */}
      <div className="flex flex-col w-[360px] h-[381px] gap-[24px]">

        {/* Frame 324 */}
        <div className="flex flex-col w-[360px] h-[381px] gap-[16px]">

          {/* Frame 325 */}
          <div className="flex flex-col w-[360px] h-[319px] gap-[16px]">

            {/* Frame 323 */}
            <div className="flex flex-col w-[360px] h-[256px] gap-[24px]">

              {/* Title */}
              <Title
                title="Welcome Back"
                titleNameClass="font-semibold text-[32px] leading-none text-center text-gray-900 font-inter"
                subtitle="Log in to continue learning"
                subtitleNameClass="font-medium font-inter text-[14px] leading-none tracking-normal text-center text-gray-500"
              />

              {/* Form */}
              <form
                id="login-form"
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col w-[360px] gap-[16px]"
              >
                {errors.api && (
                  <div className="px-3 py-2 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                    {errors.api}
                  </div>
                )}

                <FormInput
                  label="Email*"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  error={errors.email}
                  onChange={(v) => setField("email", v)}
                  onClearError={() => clearError("email")}
                />

                <FormInput
                  label="Password*"
                  type="password"
                  placeholder="Your password"
                  value={form.password}
                  error={errors.password}
                  onChange={(v) => setField("password", v)}
                  onClearError={() => clearError("password")}
                />

              </form>
            </div>

            {/* Button */}
            <FormButton
              form="login-form"
              type="submit"
              label="Log in"
              loading={loading}
              loadingLabel="Logging in..."
              disabled={loading}
              variant="primary"   
              size="md"     
            />

          </div>

          {/* Footer */}
          <div className="flex flex-col w-[360px] h-[46px] gap-[8px] items-center justify-center">
            <div className="flex items-center w-[320px] h-[21px] gap-2">
              <div className="flex-1 h-[1px] bg-gray-200" />
              <span className="font-inter font-normal text-[14px] text-gray-400 leading-none">O</span>
              <div className="flex-1 h-[1px] bg-gray-200" />
            </div>
            <div className="flex items-center justify-center w-[360px] h-[17px]">
              <p className="font-inter font-normal text-[12px] leading-none tracking-normal text-center text-gray-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={onSwitchToRegister}
                  className="font-inter font-medium text-[14px] leading-none tracking-normal text-center underline decoration-solid underline-offset-[25%] text-gray-900"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}