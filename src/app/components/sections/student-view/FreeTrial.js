import React from "react";
import SecondaryButton from "../../Button/SecondaryButton";
import ArrowRight from "../../icons/ArrowRight";

export default function FreeTrial() {
  return (
    <section className="py-24 2xl:py-28">
      <div className="container">
        <div className="bg-dark2 p-4 sm:p-12 flex flex-wrap justify-between items-center gap-4">
          <div>
            <h2 className="font-48 font-bold text-white">
              <span className="text-primary">
                Free Trial Courses <br />
                For
              </span>{" "}
              (7 Days)
            </h2>
            <p className="font-30 text-gray-light">
              Get the free access to our recurse center
            </p>
          </div>
          <div className="col-span-4">
            <SecondaryButton className="flex items-center gap-2">
              <span>GET FREE ACCESS</span>
              <ArrowRight />
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
