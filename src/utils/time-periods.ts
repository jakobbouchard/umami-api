const HOUR_PERIODS = ["1h", "1hour", "60min", "60minutes"];
const DAY_PERIODS = ["1d", "1day", "24h", "24hours"];
const WEEK_PERIODS = ["7d", "7days", "1w", "1week"];
const MONTH_PERIODS = ["31d", "31days", "1m", "1month"];

export const convertPeriodToTime = (period: TimePeriod = "24h") => {
	let delta: number;
	if (HOUR_PERIODS.includes(period)) {
		delta = 60 * 60 * 1000;
	} else if (DAY_PERIODS.includes(period)) {
		delta = 24 * 60 * 60 * 1000;
	} else if (WEEK_PERIODS.includes(period)) {
		delta = 7 * 24 * 60 * 60 * 1000;
	} else if (MONTH_PERIODS.includes(period)) {
		delta = 31 * 24 * 60 * 60 * 1000;
	} else {
		throw `Unexpected period provided. Accepted values are : ${[
			...HOUR_PERIODS,
			...DAY_PERIODS,
			...WEEK_PERIODS,
			...MONTH_PERIODS,
		]}`;
	}
	return {
		start_at: Date.now() - delta,
		end_at: Date.now(),
	};
};
