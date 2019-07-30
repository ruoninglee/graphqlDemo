import {DateTime} from "luxon";
import {isNil} from "lodash";

export function fromIso(t?: string, timeZone: string = "utc"): DateTime | undefined {
    return isNil(t) ? undefined : DateTime.fromISO(t, {zone: timeZone});
}

export function toIso(t?: DateTime): string | undefined {
    return isNil(t) ? undefined : t.toUTC().toISO();
}

export function toIsoDate(t?: DateTime): string | undefined {
    return isNil(t) ? undefined : t.toUTC().toISODate();
}

export function toExcel(t?: DateTime, timeZone: string = "utc"): string | undefined {
    return isNil(t) ? undefined : t.setZone(timeZone).toFormat("M/d/yyyy H:mm:ss");
}

export function fromExcel(t?: string, timeZone: string = "utc"): DateTime | undefined {
    return isNil(t) ? undefined : DateTime.fromFormat(t, "M/d/yyyy H:mm:ss", {zone: timeZone});
}

export function toSageIntacctDate(t: DateTime, timeZone: string = "utc"): string {
    return t.setZone(timeZone).toFormat("M/d/yyyy");
}

export function fromMillis(m: number, timeZone: string = "utc"): DateTime {
    return DateTime.fromMillis(m, {zone: timeZone});
}

export function startOfToday(): DateTime {
    return DateTime.utc().startOf("day");
}

export function startOfYesterday(): DateTime {
    return DateTime.utc().minus({days: 1}).startOf("day");
}

export function endOfYesterday(): DateTime {
    return DateTime.utc().minus({days: 1}).endOf("day");
}

export function mergeDateAndTimeIso(dateIso: string, timeIso: string): DateTime {
    const date = fromIso(dateIso)!;
    const time = fromIso(timeIso)!;
    return date.set({hour: time.hour, minute: time.minute, second: time.second, millisecond: time.millisecond});
}
