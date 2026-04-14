import { useRegisterForm } from "@/hooks/useRegisterForm";
import { FormTitle } from "@/components/ui/forms/FormTitle";
import { FormInput } from "@/components/ui/forms/FormInput";
import { FormButton } from "@/components/ui/forms/FormButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

import type { User } from "@/types/user/types";

interface Props {
  onSuccess: (user: User) => void;
  onSwitchToLogin: () => void;
  onClose?: () => void;
}

/*
 * Map of heights to help use them in registration part.
 * As height of all steps differ this height map manages to solve problem.
*/

const stepHeight: Record<number, Record<number, string>> = {
  1: {0: "h-[416px]", 1: "h-[316px]", 2: "h-[254px]"},
  2: {0: "h-[513px]", 1: "h-[413px]", 2: "h-[351px]"},
  3: {0: "h-[622px]", 1: "h-[522px]", 2: "h-[447px]"}, 
};


export default function RegisterForm({ onSuccess, onSwitchToLogin, onClose }: Props) {
  const {
    step, form, errors, loading, fileRef,
    setField, clearError, handleAvatarChange, handleNext,
  } = useRegisterForm(onSuccess);

  return (
    <div className={`relative flex flex-col items-center w-[460px] ${stepHeight[step][0]} rounded-[12px] p-[50px] gap-[12px] bg-white`}>

      {/* Close button */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center hover:bg-gray-100 transition-colors"
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
      {/* Box comments to help developer distinguish each other */}
      {/* Inner box: 360, gap 24px */}
      <div className={`flex flex-col w-[360px] ${stepHeight[step][1]} h-[316px] gap-[24px]`}>

        {/* Frame 325: 360, gap 16px */}
        <div className={`flex flex-col w-[360px] ${stepHeight[step][1]}`}>

          {/* Frame 323: 360, gap 24px */}
          <div className={`flex flex-col w-[360px] ${stepHeight[step][2]} gap-[16px]`}>

            {/* Title */}
            <FormTitle
              title="Create Account"
              subtitle="Join and start learning today"
            />

            {/* Step indicator */}
            <div className="flex flex-row w-[360px] h-[8px] gap-[8px]">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-[114.67px] h-[8px] rounded-full transition-all duration-300 ${
                    s < step
                      ? "bg-[#4F46E5]"
                      : s === step
                      ? "bg-[#B7B3F4]"
                      : "bg-[#EEEDFC]"
                  }`}
                />
              ))}
            </div>

            {/* Form */}
            <form id="register-form" onSubmit={handleNext} noValidate className="flex flex-col w-[360px] gap-[16px]">

              {errors.api && (
                <div className="px-3 py-2 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                  {errors.api}
                </div>
              )}

              {/* STEP 1 — Email */}
              {step === 1 && (
                <FormInput
                  label="Email*"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  error={errors.email}
                  onChange={(v) => setField("email", v)}
                  onClearError={() => clearError("email")}
                />
              )}

              {/* STEP 2 — Password + Confirm */}
              {step === 2 && (
                <>
                  <FormInput
                    label="Password*"
                    type="password"
                    placeholder="Min. 6 characters"
                    value={form.password}
                    error={errors.password}
                    autoFocus
                    onChange={(v) => setField("password", v)}
                    onClearError={() => clearError("password")}
                  />
                  <FormInput
                    label="Confirm Password*"
                    type="password"
                    placeholder="Repeat password"
                    value={form.confirmPassword}
                    error={errors.confirmPassword}
                    onChange={(v) => setField("confirmPassword", v)}
                    onClearError={() => clearError("confirmPassword")}
                  />
                </>
              )}

              {/* STEP 3 — Username + Avatar */}
              {step === 3 && (
                <>
                  <FormInput
                    label="Username*"
                    type="text"
                    placeholder="Pick a username"
                    value={form.username}
                    error={errors.username}
                    autoFocus
                    onChange={(v) => setField("username", v)}
                    onClearError={() => clearError("username")}
                  />
                  <div className="flex flex-col w-[360px] h-[169px] gap-[12px]">
  <label className="h-[17px] font-inter text-sm font-medium text-gray-700">
   Upload Avatar <span className="text-gray-400 text-xs"></span>
  </label>

  {/* Upload box: 360×140 */}
  <div
    onClick={() => fileRef.current?.click()}
    className="flex flex-col items-center justify-center w-[360px] h-[140px] gap-[8px] cursor-pointer rounded-[8px] bg-white transition-colors hover:bg-indigo-50 hover:border-indigo-400"
    style={{
      border: "1.5px solid #D1D1D1",
      paddingTop: "30px",
      paddingBottom: "30px",
    }}
  >
    {form.avatarPreview ? (
      <img src={form.avatarPreview} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
    ) : (
      <>
        {/* Icon: 34×34 */}
        <div className="w-[34px] h-[34px] flex items-center justify-center">
          <FontAwesomeIcon icon={faArrowUpFromBracket} className="w-full h-full text-gray-400" />
        </div>

        {/* Text frame: 360×38, gap 6px */}
            <div className="flex flex-col items-center w-[360px] h-[38px] gap-[6px]">

              {/* "Drag and drop or browse" — underlined, 14px medium */}
              <p
                className="w-[360px] h-[17px] font-inter text-center leading-none"
                style={{
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Drag and drop or <a style={{textDecoration: "underline",
                                      textDecorationStyle: "solid",
                                      textUnderlineOffset: "25%",
                                      color: "#4a6ea9",
                }}>Upload File</a>
              </p>

              {/* "JPG, PNG, or WebP" — 12px regular gray */}
              <p
                className="w-[360px] h-[15px] font-inter text-center leading-none"
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "#ADADAD",
                }}
              >
                JPG, PNG, or WebP
              </p>

            </div>
          </>
        )}
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleAvatarChange}
      />
      {errors.avatar && <p className="text-xs text-red-500">{errors.avatar}</p>}
    </div>
                </>
              )}

            </form>
          {/* Button */}
            <FormButton
              form="register-form"
              label={step < 3 ? "Next" : "Create account"}
              loading={loading}
              loadingLabel="Creating account..."
              disabled={loading}
              variant="primary"   
              size="md"           
            />
          </div>

        {/* Footer: 360×46, gap 8px */}
        <div className="flex flex-col w-[360px] h-[46px] gap-[8px] items-center justify-center">
          <div className="flex items-center w-[320px] h-[21px] gap-2">
            <div className="flex-1 h-[1px] bg-gray-200" />
            <span className="font-inter font-normal text-[14px] text-gray-400 leading-none">O</span>
            <div className="flex-1 h-[1px] bg-gray-200" />
          </div>
          <div className="flex items-center justify-center w-[360px] h-[17px] gap-[8px]">
            <p className="font-inter font-normal text-[12px] leading-none tracking-normal text-center text-gray-400">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="font-inter font-medium text-[14px] leading-none tracking-normal text-center underline decoration-solid underline-offset-[25%] text-gray-900"
              >
                Log in
              </button>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}