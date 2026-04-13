import { useRef } from "react";
import { FormInput } from "@/components/ui/FormInput";
import { FormButton } from "@/components/ui/FormButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useEditProfileForm } from "@/hooks/useEditProfileForm";
import type { User } from "@/types/user/types";

interface Props {
  onClose?: () => void;
  onSuccess: (user: User) => void;
  user: User;
}

export default function EditProfileForm({ onClose, onSuccess, user }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const { form, errors, loading, setField, clearError, handleSubmit } =
    useEditProfileForm(user, onSuccess);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setField("avatarPreview", reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative flex flex-col items-center w-[460px] h-[730px] rounded-[12px] p-[50px] gap-[12px] bg-white">

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-[24px] h-[24px] flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <svg width="13.18" height="13.18" viewBox="0 0 14 14" fill="none"
            style={{ position: "absolute", top: "5.41px", left: "5.41px" }}>
            <path d="M1 1L13 13M13 1L1 13" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}

      <div className="flex flex-col w-[360px] h-[632px] gap-[16px]">
        <div className="flex flex-col w-[360px] h-[632px] gap-[16px]">
          <div className="flex flex-col w-[360px] h-[569px] gap-[24px]">

            {/* Header: title + user preview */}
            <div className="flex flex-col w-[360px] h-[119px] gap-[24px]">
              <div className="flex flex-col w-[360px] h-[39px] gap-[6px]">
                <h2 className="font-semibold text-[32px] leading-none text-center text-gray-900 font-inter">
                  Edit Profile
                </h2>
              </div>
              <div className="flex flex-row w-[360px] h-[56px] gap-[12px] items-center">
                <div className="relative flex-shrink-0">
                  {form.avatarPreview ? (
                    <img src={form.avatarPreview} alt="avatar" className="w-[38px] h-[38px] rounded-full object-cover" />
                  ) : (
                    <div className="w-[38px] h-[38px] rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium">
                      {user.username?.[0]?.toUpperCase() ?? "U"}
                    </div>
                  )}
                  <span
                    className="absolute bottom-0 right-0 w-[15px] h-[15px] rounded-full border-2 border-white"
                    style={{ backgroundColor: "#22C55E" }}
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="font-inter font-semibold leading-none text-gray-900"
                    style={{ width: "292px", fontSize: "16px" }}>
                    {user.username}
                  </p>
                  <p className="font-inter font-normal leading-none text-gray-400"
                    style={{ width: "292px", fontSize: "12px", paddingLeft: "2px" }}>
                    {user.profileComplete ? "Profile complete" : "Profile incomplete"}
                  </p>
                </div>
              </div>
            </div>

            {/* Form fields */}
            <form id="edit-profile-form" onSubmit={handleSubmit} noValidate
              className="flex flex-col w-[360px] h-[426px] gap-[12px]">

              <FormInput
                label="Full Name"
                type="text"
                placeholder="Username"
                value={form.fullName}
                error={errors.fullName}
                onChange={(v) => setField("fullName", v)}
                onClearError={() => clearError("fullName")}
              />

              <FormInput
                label="Email"
                type="email"
                placeholder="Email@gmail.com"
                value={form.email}
                error={errors.email}
                onChange={(v) => setField("email", v)}
                onClearError={() => clearError("email")}
              />

              {/* Phone + Age side by side */}
              <div className="flex flex-row w-[360px] h-[73px] gap-[8px]">
                <FormInput
                  label="Mobile Number"
                  type="tel"
                  placeholder="+995 599209820"
                  value={form.mobileNumber}
                  error={errors.mobileNumber}
                  style={{ width: "267px" }}
                  onChange={(v) => setField("mobileNumber", v)}
                  onClearError={() => clearError("mobileNumber")}
                />
                <FormInput
                  label="Age"
                  type="number"
                  placeholder="29"
                  value={form.age}
                  error={errors.age}
                  style={{ width: "85px" }}
                  onChange={(v) => setField("age", v)}
                  onClearError={() => clearError("age")}
                />
              </div>

              {/* Avatar upload */}
              <div className="flex flex-col w-[360px] h-[171px] gap-[12px]">
                <label className="h-[17px] font-inter text-sm font-medium text-gray-700">
                  Upload Avatar
                </label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="flex flex-col items-center justify-center w-[360px] h-[140px] gap-[8px] cursor-pointer rounded-[8px] bg-white transition-colors hover:bg-indigo-50 hover:border-indigo-400"
                  style={{ border: "1.5px solid #D1D1D1", paddingTop: "30px", paddingBottom: "30px" }}
                >
                  {form.avatarPreview ? (
                    <img src={form.avatarPreview} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <>
                      <div className="w-[34px] h-[34px] flex items-center justify-center">
                        <FontAwesomeIcon icon={faArrowUpFromBracket} className="w-full h-full text-gray-400" />
                      </div>
                      <div className="flex flex-col items-center w-[360px] h-[38px] gap-[6px]">
                        <p className="w-[360px] h-[17px] font-inter text-center leading-none"
                          style={{ fontWeight: 500, fontSize: "14px" }}>
                          Drag and drop or{" "}
                          <a style={{ textDecoration: "underline", textDecorationStyle: "solid", textUnderlineOffset: "25%", color: "#4a6ea9" }}>
                            Upload File
                          </a>
                        </p>
                        <p className="w-[360px] h-[15px] font-inter text-center leading-none"
                          style={{ fontWeight: 400, fontSize: "12px", color: "#ADADAD" }}>
                          JPG, PNG, or WebP
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={handleAvatarChange} />
                {errors.avatar && <p className="text-xs text-red-500">{errors.avatar}</p>}
              </div>

            </form>
          </div>

          <FormButton
            form="edit-profile-form"
            label="Update Profile"
            loading={loading}
            loadingLabel="Updating..."
            disabled={loading}
          />

        </div>
      </div>
    </div>
  );
}