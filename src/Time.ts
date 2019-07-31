import {isNil} from "lodash";
import {DateTime} from "luxon";

export function fromIso(t?: string, timeZone: string = "utc"): DateTime | undefined {
    return isNil(t) ? undefined : DateTime.fromISO(t!, {zone: timeZone});
}

export function toIso(t?: DateTime): string | undefined {
    return isNil(t) ? undefined : t!.toUTC().toISO();
}
