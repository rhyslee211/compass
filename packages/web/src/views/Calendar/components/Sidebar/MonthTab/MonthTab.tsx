import React from "react";
import { WeekProps } from "@web/views/Calendar/hooks/useWeek";
import { SidebarContent } from "../SomedayTab/styled";
import { SidebarMonthPicker } from "./MonthPicker/SidebarMonthPicker";
import { SubCalendarList } from "./SubCalendarList/SubCalendarList";

export interface Props {
  isCurrentWeek: boolean;
  monthsShown?: number;
  setStartOfView: WeekProps["state"]["setStartOfView"];
  weekStart: WeekProps["component"]["startOfView"];
}

export const MonthTab: React.FC<Props> = ({
  isCurrentWeek,
  monthsShown,
  setStartOfView,
  weekStart,
}) => {
  return (
    <SidebarContent>
      <SidebarMonthPicker
        isCurrentWeek={isCurrentWeek}
        monthsShown={monthsShown}
        setStartOfView={setStartOfView}
        weekStart={weekStart}
      />
      <SubCalendarList />
    </SidebarContent>
  );
};
