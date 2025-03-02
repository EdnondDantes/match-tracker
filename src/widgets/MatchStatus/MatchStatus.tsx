import { MatchStatusType } from "@/entities/Match/model";
import classNames from "classnames";
import styles from "./MatchStatus.module.css";

interface MatchStatusProps {
  status: MatchStatusType;
}

const statusMap: { [key in MatchStatusType]: string } = {
  Ongoing: "`Live",
  Finished: "Finished",
  Scheduled: "Preparing",
};

export const MatchStatus = ({ status }: MatchStatusProps) => {
  const statusClass = classNames(styles.matchStatus, {
    [styles.live]: status === "Ongoing",
    [styles.finished]: status === "Finished",
    [styles.preparing]: status === "Scheduled",
  });

  const statusText = statusMap[status] || '';

  return <div className={statusClass}>{statusText}</div>;
};
