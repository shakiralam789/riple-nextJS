import SecondaryButton from "@/app/components/Button/SecondaryButton";
import Input from "@/app/components/form/input";
import Label from "@/app/components/form/Label";
import TextArea from "@/app/components/form/TextArea";
import React from "react";

export default function EnterDetails({ setIsDetails, data, setData }) {
  function handleSubmit() {
    console.log(data);
  }
  return (
    <div className="py-6">
      <h2 className="font-30 text-dark2 capitalize mb-4">Enter Details</h2>
      <div className="grid grid-cols-1 gap-y-4 2xl:gap-y-6">
        <div>
          <Label className="required">Name</Label>
          <Input
            value={data.name || ""}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <Label className="required">Email</Label>
          <Input
            value={data.email || ""}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type="email"
          />
        </div>
        <div>
          <Label>Guest Email (s)</Label>
          <Input
            value={data.guest_email || ""}
            onChange={(e) => setData({ ...data, guest_email: e.target.value })}
            type="email"
          />
          <p className="font-18 text-para mt-2">
            Notify up to 10 Additional Guests of the Scheduled event.
          </p>
        </div>
        <div>
          <Label>
            Please share anything that will help prepare for our meeting.
          </Label>

          <TextArea
            value={data.desc || ""}
            onChange={(e) => setData({ ...data, desc: e.target.value })}
          />
          <p className="font-16 text-para mt-2">
            By proceeding, you confirm that you have read and agree to
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <SecondaryButton
          onClick={() => setIsDetails(false)}
          className="mt-5 text-white px-10 hover:text-white font-medium hover:bg-dark-green hover:border-dark-green"
        >
          Back
        </SecondaryButton>
        <SecondaryButton
          onClick={handleSubmit}
          className="mt-5 text-white px-10 hover:text-white font-medium hover:bg-dark-green hover:border-dark-green"
        >
          Schedule Event
        </SecondaryButton>
      </div>
    </div>
  );
}
