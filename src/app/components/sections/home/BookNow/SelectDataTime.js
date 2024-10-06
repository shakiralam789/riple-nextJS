"use client";
import React, { useEffect, useState } from "react";
import {
  LocalizationProvider,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Select from "react-select";
import moment from "moment-timezone";
import dayjs from "dayjs";
import SecondaryButton from "@/app/components/Button/SecondaryButton";

const timezones = moment.tz.names().map((zone) => ({
  value: zone,
  label: zone,
}));

export default function SelectDataTime({ setIsDetails, data, setData }) {
  const [isMounted, setIsMounted] = useState(false);
  const handleTimezoneChange = (option) => {
    setData({ ...data, time_zone: option.value });
  };

  const handleDateTimeChange = (value) => {
    setData({ ...data, time: value });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return;
  return (
    <>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker
            value={data.time || ""}
            onChange={(newValue) => handleDateTimeChange(newValue)}
            displayStaticWrapperAs="mobile"
          />
        </LocalizationProvider>
      </div>
      <div>
        <h2 className="font-20 mb-2 uppercase text-gray-700">Time zone</h2>

        <Select
          options={timezones}
          value={{ value: data.time_zone || "", label: data.time_zone || "" }}
          onChange={handleTimezoneChange}
          isSearchable={true}
          placeholder="Select a Timezone"
          menuPlacement="top"
        />
      </div>
      <SecondaryButton
        onClick={() => setIsDetails(true)}
        className="mt-5 text-white px-10 hover:text-white font-medium hover:bg-dark-green hover:border-dark-green"
      >
        Next
      </SecondaryButton>
    </>
  );
}
