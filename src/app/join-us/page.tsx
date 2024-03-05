import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const JoinUsPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Let&apos;s get you set up</CardTitle>
        <CardDescription>
          Select the role that best describes what you want to join as
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup className="grid grid-cols-2 gap-4">
          <Link href="/join-us/provider">
            <RadioGroupItem
              value="provider"
              className="peer sr-only"
              aria-label="Escort"
            />
            <Label
              htmlFor="provider"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Escort / Masseuse / Companion
              <span className="mt-2  font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </Label>
          </Link>
          <Link href="/join-us/client">
            <RadioGroupItem
              value="punter"
              className="peer sr-only"
              aria-label="Punter"
            />
            <Label
              htmlFor="punter"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Punter / Client / Dude
              <span className="mt-2  font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </Label>
          </Link>
          <Link href="/join-us/venue">
            <RadioGroupItem
              value="venue"
              className="peer sr-only"
              aria-label="Venue"
            />
            <Label
              htmlFor="venue"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Venue / Club / Spa
              <span className="mt-2  font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </Label>
          </Link>
          <Link href="/join-us/advertiser">
            <RadioGroupItem
              value="advertiser"
              className="peer sr-only"
              aria-label="Advertiser"
            />
            <Label
              htmlFor="advertiser"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Advertiser
              <span className="mt-2  font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </Label>
          </Link>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default JoinUsPage;
