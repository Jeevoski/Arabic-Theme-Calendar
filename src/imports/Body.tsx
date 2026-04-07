import svgPaths from "./svg-04rtv5lath";
import imgSereneMinimalistLandscapeWithSoftMorningLightAndMist from "figma:asset/b5106d569692690fc1f8e24323b71384c3477d5b.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Sans:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d2d2a] text-[20px] tracking-[-1px] w-[198.95px]">
        <p className="leading-[28px]">The Curated Ephemera</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Liberation_Serif:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#76786f] text-[12px] tracking-[-0.3px] uppercase w-[47.78px]">
        <p className="leading-[16px]">Yearly</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#a67c52] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Liberation_Serif:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#a67c52] text-[12px] tracking-[-0.3px] uppercase w-[60.14px]">
        <p className="leading-[16px]">Monthly</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[40px] relative shrink-0" data-name="Link:margin">
      <Link1 />
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[40px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Liberation_Serif:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#76786f] text-[12px] tracking-[-0.3px] uppercase w-[60.95px]">
        <p className="leading-[16px]">Archives</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[40px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Liberation_Serif:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#76786f] text-[12px] tracking-[-0.3px] uppercase w-[57.64px]">
        <p className="leading-[16px]">Settings</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Nav">
      <Link />
      <LinkMargin />
      <LinkMargin1 />
      <LinkMargin2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2d2d2a] content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative rounded-[5.6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase w-[109.2px]">
        <p className="leading-[16px]">Jump to Today</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1536px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[32px] pr-[32.02px] py-[20px] relative w-full">
          <Container1 />
          <Nav />
          <Button />
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(252,249,248,0.8)] content-stretch flex flex-col items-start pb-px relative shrink-0 w-full z-[2]" data-name="Header - TopNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(166,124,82,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d2d2a] text-[20px] tracking-[0.35px] w-full">
        <p className="leading-[28px]">Editorial View</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#76786f] text-[10px] tracking-[2px] uppercase w-full">
        <p className="leading-[20px]">March 2024</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container4 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[48px] relative w-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15">
        <g id="Container">
          <path d={svgPaths.p237d6180} fill="var(--fill-0, #A67C52)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-white relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Container5 />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#a67c52] text-[14px] tracking-[0.35px] w-[64.78px]">
            <p className="leading-[20px]">Calendar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-[12.75px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7499 11.2499">
        <g id="Container">
          <path d={svgPaths.p29bd9e0} fill="var(--fill-0, #76786F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Container6 />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[14px] tracking-[0.35px] w-[52.06px]">
            <p className="leading-[20px]">Planner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[13.774px] relative shrink-0 w-[15.75px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7499 13.774">
        <g id="Container">
          <path d={svgPaths.p3b3ec700} fill="var(--fill-0, #76786F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Container7 />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[14px] tracking-[0.35px] w-[80.2px]">
            <p className="leading-[20px]">Collections</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[14.25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2499 14.2499">
        <g id="Container">
          <path d={svgPaths.p38bdce00} fill="var(--fill-0, #76786F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Container8 />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[14px] tracking-[0.35px] w-[46.31px]">
            <p className="leading-[20px]">Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#a67c52] relative rounded-[5.6px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[16px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[5.6px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase w-[100.77px]">
          <p className="leading-[16px]">Create Entry</p>
        </div>
      </div>
    </div>
  );
}

function AsideSideNavBar() {
  return (
    <div className="bg-[#f5f1ef] relative self-stretch shrink-0 w-[288px]" data-name="Aside - SideNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(166,124,82,0.05)] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between pl-[32px] pr-[33px] py-[32px] relative size-full">
        <Margin />
        <Nav1 />
        <Button1 />
      </div>
    </div>
  );
}

function SereneMinimalistLandscapeWithSoftMorningLightAndMist() {
  return (
    <div className="aspect-[21/9] relative shrink-0 w-full" data-name="Serene minimalist landscape with soft morning light and mist">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[233.34%] left-0 max-w-none top-[-66.67%] w-full" src={imgSereneMinimalistLandscapeWithSoftMorningLightAndMist} />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative" data-name="Container">
      <div className="flex flex-col font-['Liberation_Sans:Bold',sans-serif] h-[128px] justify-center leading-[0] not-italic relative shrink-0 text-[128px] text-[rgba(255,255,255,0.4)] tracking-[-6.4px] uppercase w-[272.31px]">
        <p className="leading-[128px]">MAR</p>
      </div>
    </div>
  );
}

function VerticalTextOverlay() {
  return (
    <div className="absolute bottom-[0.01px] left-0 top-0 w-[272.31px]" data-name="Vertical Text Overlay">
      <div className="-translate-y-1/2 absolute flex h-[272.31px] items-center justify-center left-[-18.61px] mix-blend-overlay top-[calc(50%+0.01px)] w-[128px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function MainVisualPanel() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Main Visual Panel">
      <SereneMinimalistLandscapeWithSoftMorningLightAndMist />
      <VerticalTextOverlay />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Liberation_Sans:Bold',sans-serif] h-[60px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d2d2a] text-[60px] tracking-[-3px] w-[296.88px]">
        <p className="leading-[60px]">March 2024</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(166,124,82,0.1)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[2.4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#a67c52] text-[10px] tracking-[1px] uppercase w-[100.83px]">
        <p className="leading-[15px]">Spring Equinox</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Overlay />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[14px] tracking-[4.2px] uppercase w-[257.36px]">
        <p className="leading-[20px]">The Vernal Awakening</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[437.71px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[11.308px] relative shrink-0 w-[6.708px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.70764 11.3076">
        <g id="Container">
          <path d={svgPaths.p48ccf00} fill="var(--fill-0, #2D2D2A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(199,199,189,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[11.308px] relative shrink-0 w-[6.708px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.70764 11.3076">
        <g id="Container">
          <path d={svgPaths.p69ffb00} fill="var(--fill-0, #2D2D2A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(199,199,189,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Container11 />
        <Container14 />
      </div>
    </div>
  );
}

function WeekdayHeaders() {
  return (
    <div className="bg-[#fcf9f8] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Weekday Headers">
      <div aria-hidden="true" className="absolute border-[rgba(199,199,189,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[21px] pt-[20px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[10px] text-center tracking-[2px] uppercase w-[27.06px]">
          <p className="leading-[15px]">Sun</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#fcf9f8] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(199,199,189,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[21px] pt-[20px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[10px] text-center tracking-[2px] uppercase w-[31.13px]">
          <p className="leading-[15px]">Mon</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-[#fcf9f8] col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(199,199,189,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[21px] pt-[20px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[10px] text-center tracking-[2px] uppercase w-[24.56px]">
          <p className="leading-[15px]">Tue</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div className="bg-[#fcf9f8] col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(199,199,189,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[21px] pt-[20px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[10px] text-center tracking-[2px] uppercase w-[29.56px]">
          <p className="leading-[15px]">Wed</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder3() {
  return (
    <div className="bg-[#fcf9f8] col-5 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(199,199,189,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[21px] pt-[20px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[10px] text-center tracking-[2px] uppercase w-[25.94px]">
          <p className="leading-[15px]">Thu</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder4() {
  return (
    <div className="bg-[#fcf9f8] col-6 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(199,199,189,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[21px] pt-[20px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[10px] text-center tracking-[2px] uppercase w-[21.27px]">
          <p className="leading-[15px]">Fri</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder5() {
  return (
    <div className="bg-[#fcf9f8] col-7 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(199,199,189,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[21px] pt-[20px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[10px] text-center tracking-[2px] uppercase w-[24.44px]">
          <p className="leading-[15px]">Sat</p>
        </div>
      </div>
    </div>
  );
}

function Row1FebEnd() {
  return (
    <div className="bg-[rgba(252,249,248,0.3)] col-1 justify-self-stretch min-h-[120px] relative row-2 self-start shrink-0" data-name="Row 1 (Feb end)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(118,120,111,0.2)] w-[19.45px]">
          <p className="leading-[24px]">25</p>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(252,249,248,0.3)] col-2 justify-self-stretch min-h-[120px] relative row-2 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(118,120,111,0.2)] w-[19.17px]">
          <p className="leading-[24px]">26</p>
        </div>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(252,249,248,0.3)] col-3 justify-self-stretch min-h-[120px] relative row-2 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(118,120,111,0.2)] w-[18.36px]">
          <p className="leading-[24px]">27</p>
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(252,249,248,0.3)] col-4 justify-self-stretch min-h-[120px] relative row-2 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(118,120,111,0.2)] w-[19.66px]">
          <p className="leading-[24px]">28</p>
        </div>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(252,249,248,0.3)] col-5 justify-self-stretch min-h-[120px] relative row-2 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(118,120,111,0.2)] w-[19.17px]">
          <p className="leading-[24px]">29</p>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white col-6 justify-self-stretch min-h-[120px] relative row-2 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[6.13px]">
          <p className="leading-[24px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(252,249,248,0.2)] col-7 justify-self-stretch min-h-[120px] relative row-2 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[9.59px]">
          <p className="leading-[24px]">2</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[rgba(252,249,248,0.2)] col-1 justify-self-stretch min-h-[120px] relative row-3 self-start shrink-0" data-name="Row 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[9.77px]">
          <p className="leading-[24px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white col-2 justify-self-stretch min-h-[120px] relative row-3 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[10.22px]">
          <p className="leading-[24px]">4</p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white col-3 justify-self-stretch min-h-[120px] relative row-3 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[9.86px]">
          <p className="leading-[24px]">5</p>
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white col-4 justify-self-stretch min-h-[120px] relative row-3 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[9.59px]">
          <p className="leading-[24px]">6</p>
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white col-5 justify-self-stretch min-h-[120px] relative row-3 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[8.78px]">
          <p className="leading-[24px]">7</p>
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-white col-6 justify-self-stretch min-h-[120px] relative row-3 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[10.08px]">
          <p className="leading-[24px]">8</p>
        </div>
      </div>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(252,249,248,0.2)] col-7 justify-self-stretch min-h-[120px] relative row-3 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[9.59px]">
          <p className="leading-[24px]">9</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-[rgba(252,249,248,0.2)] col-1 justify-self-stretch min-h-[120px] relative row-4 self-start shrink-0" data-name="Row 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[17.7px]">
          <p className="leading-[24px]">10</p>
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-white col-2 justify-self-stretch min-h-[120px] relative row-4 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[12.23px]">
          <p className="leading-[24px]">11</p>
        </div>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-white col-3 justify-self-stretch min-h-[120px] relative row-4 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[15.7px]">
          <p className="leading-[24px]">12</p>
        </div>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-white col-4 h-[120px] justify-self-stretch min-h-[120px] relative row-4 shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] left-[16px] text-[#2d2d2a] text-[16px] top-[27.5px] w-[15.88px]">
          <p className="leading-[24px]">13</p>
        </div>
        <div className="-translate-x-1/2 absolute bg-[#a67c52] left-1/2 rounded-[9999px] size-[4px] top-[44px]" data-name="Background" />
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-white col-5 justify-self-stretch min-h-[120px] relative row-4 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[16.33px]">
          <p className="leading-[24px]">14</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#a67c52] text-[18px] w-[18.33px]">
          <p className="leading-[28px]">15</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-2 border-[#a67c52] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container17 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-white col-6 justify-self-stretch min-h-[120px] relative row-4 self-start shrink-0" data-name="Background">
      <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center min-h-[inherit] px-[16px] py-[36px] relative w-full">
          <Border />
        </div>
      </div>
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[rgba(252,249,248,0.2)] col-7 justify-self-stretch min-h-[120px] relative row-4 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[15.55px]">
          <p className="leading-[24px]">16</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[rgba(252,249,248,0.2)] col-1 justify-self-stretch min-h-[120px] relative row-5 self-start shrink-0" data-name="Row 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[14.89px]">
          <p className="leading-[24px]">17</p>
        </div>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-white col-2 justify-self-stretch min-h-[120px] relative row-5 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[16.19px]">
          <p className="leading-[24px]">18</p>
        </div>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-white col-3 justify-self-stretch min-h-[120px] relative row-5 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[15.7px]">
          <p className="leading-[24px]">19</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[21.17px]">
        <p className="leading-[24px]">20</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[8px] items-start pt-[4px] relative shrink-0 w-[4px]" data-name="Margin">
      <div className="bg-[#a67c52] rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-white col-4 justify-self-stretch min-h-[120px] relative row-5 self-start shrink-0" data-name="Background">
      <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center min-h-[inherit] px-[16px] py-[44px] relative w-full">
          <Container18 />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-white col-5 justify-self-stretch min-h-[120px] relative row-5 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[15.7px]">
          <p className="leading-[24px]">21</p>
        </div>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-white col-6 justify-self-stretch min-h-[120px] relative row-5 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[19.17px]">
          <p className="leading-[24px]">22</p>
        </div>
      </div>
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[rgba(252,249,248,0.2)] col-7 justify-self-stretch min-h-[120px] relative row-5 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[19.36px]">
          <p className="leading-[24px]">23</p>
        </div>
      </div>
    </div>
  );
}

function Row5CompletingMarch() {
  return (
    <div className="bg-[rgba(252,249,248,0.2)] col-1 justify-self-stretch min-h-[120px] relative row-6 self-start shrink-0" data-name="Row 5 (Completing March)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[19.64px]">
          <p className="leading-[24px]">24</p>
        </div>
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-white col-2 justify-self-stretch min-h-[120px] relative row-6 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[19.45px]">
          <p className="leading-[24px]">25</p>
        </div>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-white col-3 justify-self-stretch min-h-[120px] relative row-6 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[19.17px]">
          <p className="leading-[24px]">26</p>
        </div>
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-white col-4 justify-self-stretch min-h-[120px] relative row-6 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[18.36px]">
          <p className="leading-[24px]">27</p>
        </div>
      </div>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-white col-5 justify-self-stretch min-h-[120px] relative row-6 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[19.66px]">
          <p className="leading-[24px]">28</p>
        </div>
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-white col-6 justify-self-stretch min-h-[120px] relative row-6 self-start shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[19.17px]">
          <p className="leading-[24px]">29</p>
        </div>
      </div>
    </div>
  );
}

function Overlay9() {
  return (
    <div className="bg-[rgba(252,249,248,0.2)] col-7 justify-self-stretch min-h-[120px] relative row-6 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[21.36px]">
          <p className="leading-[24px]">30</p>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-[rgba(252,249,248,0.2)] col-1 justify-self-stretch min-h-[120px] relative row-7 self-start shrink-0" data-name="Row 6">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#2d2d2a] text-[16px] w-[15.88px]">
          <p className="leading-[24px]">31</p>
        </div>
      </div>
    </div>
  );
}

function Overlay10() {
  return (
    <div className="bg-[rgba(252,249,248,0.3)] col-2 justify-self-stretch min-h-[120px] relative row-7 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(118,120,111,0.2)] w-[6.13px]">
          <p className="leading-[24px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Overlay11() {
  return (
    <div className="bg-[rgba(252,249,248,0.3)] col-3 justify-self-stretch min-h-[120px] relative row-7 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(118,120,111,0.2)] w-[9.59px]">
          <p className="leading-[24px]">2</p>
        </div>
      </div>
    </div>
  );
}

function Overlay12() {
  return (
    <div className="bg-[rgba(252,249,248,0.3)] col-4 justify-self-stretch min-h-[120px] relative row-7 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(118,120,111,0.2)] w-[9.77px]">
          <p className="leading-[24px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Overlay13() {
  return (
    <div className="bg-[rgba(252,249,248,0.3)] col-5 justify-self-stretch min-h-[120px] relative row-7 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(118,120,111,0.2)] w-[10.22px]">
          <p className="leading-[24px]">4</p>
        </div>
      </div>
    </div>
  );
}

function Overlay14() {
  return (
    <div className="bg-[rgba(252,249,248,0.3)] col-6 justify-self-stretch min-h-[120px] relative row-7 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(118,120,111,0.2)] w-[9.86px]">
          <p className="leading-[24px]">5</p>
        </div>
      </div>
    </div>
  );
}

function Overlay15() {
  return (
    <div className="bg-[rgba(252,249,248,0.3)] col-7 justify-self-stretch min-h-[120px] relative row-7 self-start shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[80.5px] pt-[15.5px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(118,120,111,0.2)] w-[9.59px]">
          <p className="leading-[24px]">6</p>
        </div>
      </div>
    </div>
  );
}

function CalendarGrid() {
  return (
    <div className="bg-[rgba(199,199,189,0.1)] relative rounded-[5.6px] shrink-0 w-full" data-name="Calendar Grid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-px gap-y-px grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[_______56px_120px_120px_120px_120px_120px_120px] overflow-clip p-px relative rounded-[inherit] w-full">
        <WeekdayHeaders />
        <BackgroundHorizontalBorder />
        <BackgroundHorizontalBorder1 />
        <BackgroundHorizontalBorder2 />
        <BackgroundHorizontalBorder3 />
        <BackgroundHorizontalBorder4 />
        <BackgroundHorizontalBorder5 />
        <Row1FebEnd />
        <Overlay1 />
        <Overlay2 />
        <Overlay3 />
        <Overlay4 />
        <Background />
        <Overlay5 />
        <Row />
        <Background1 />
        <Background2 />
        <Background3 />
        <Background4 />
        <Background5 />
        <Overlay6 />
        <Row1 />
        <Background6 />
        <Background7 />
        <Background8 />
        <Background9 />
        <Background10 />
        <Overlay7 />
        <Row2 />
        <Background11 />
        <Background12 />
        <Background13 />
        <Background14 />
        <Background15 />
        <Overlay8 />
        <Row5CompletingMarch />
        <Background16 />
        <Background17 />
        <Background18 />
        <Background19 />
        <Background20 />
        <Overlay9 />
        <Row3 />
        <Overlay10 />
        <Overlay11 />
        <Overlay12 />
        <Overlay13 />
        <Overlay14 />
        <Overlay15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(199,199,189,0.1)] border-solid inset-0 pointer-events-none rounded-[5.6px]" />
    </div>
  );
}

function CalendarSheetTearOffPadStyle() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[48px] items-start left-0 pb-[48px] pt-[60px] px-[48px] right-0 top-[-32px]" data-name="Calendar Sheet (Tear-off pad style)">
      <div aria-hidden="true" className="absolute border-[#a67c52] border-solid border-t-12 inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)]" data-name="Calendar Sheet (Tear-off pad style):shadow" />
      <Container10 />
      <CalendarGrid />
    </div>
  );
}

function CalendarSheetTearOffPadStyleMargin() {
  return (
    <div className="h-[996px] relative shrink-0 w-full" data-name="Calendar Sheet (Tear-off pad style):margin">
      <CalendarSheetTearOffPadStyle />
    </div>
  );
}

function TheVisualAnchorHighEndWallCalendarStyle() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="The Visual Anchor: High-End Wall Calendar Style">
      <MainVisualPanel />
      <CalendarSheetTearOffPadStyleMargin />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[10px] tracking-[1px] uppercase w-[71.66px]">
        <p className="leading-[15px]">Entry #842</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(166,124,82,0.2)] tracking-[1px] uppercase w-[4.95px]">
        <p className="leading-[15px]">|</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#a67c52] text-[10px] tracking-[1px] uppercase w-[76.73px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[15px] underline">Studio View</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[532.66px] top-[17px]" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[61px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(166,124,82,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Sans:Bold',sans-serif] h-[36px] justify-center leading-[0] left-0 not-italic text-[#2d2d2a] text-[30px] top-[18px] w-[290.02px]">
          <p className="leading-[36px]">{`Journal & Intentions`}</p>
        </div>
        <Container19 />
      </div>
    </div>
  );
}

function Overlay16() {
  return (
    <div className="bg-[rgba(166,124,82,0.05)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[2.4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#a67c52] text-[10px] w-[34.59px]">
        <p className="leading-[15px]">MAR 13</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[9px] relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Light',sans-serif] font-light h-[108px] justify-center leading-[0] relative shrink-0 text-[20px] text-[rgba(45,45,42,0.9)] w-[618.41px]">
        <p className="leading-[36px] mb-0">The light shifted today. A clear indication that the season is turning.</p>
        <p className="leading-[36px] mb-0">Focus on the editorial shoot for the spring collection. Paper stock</p>
        <p className="leading-[36px]">arrived: heavy, textured, perfect.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay16 />
      <Container25 />
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-[#fcf9f8] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[2.4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#76786f] text-[10px] w-[37.5px]">
        <p className="leading-[15px]">MAR 20</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[27.08px] relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Light_Italic',sans-serif] font-light h-[72px] italic justify-center leading-[0] relative shrink-0 text-[20px] text-[rgba(45,45,42,0.3)] w-[597.42px]">
        <p className="leading-[36px] mb-0">Drafting the new collection notes... awaiting inspiration from the</p>
        <p className="leading-[36px]">morning mist.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Background21 />
      <Container27 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start relative w-full">
        <Container24 />
        <Container26 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[34px] py-[14px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(166,124,82,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#a67c52] text-[10px] text-center tracking-[2px] uppercase w-[207.69px]">
        <p className="leading-[15px]">+ Add Physical Observation</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pt-[16px] relative w-full">
        <Button4 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[15.208px] relative shrink-0 w-[8.814px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.81402 15.2082">
        <g id="Container">
          <path d={svgPaths.pc2cdb80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-[#a67c52] relative rounded-[2.4px] size-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[2.4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[48px] top-0" data-name="Overlay+Shadow" />
        <Container29 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="min-h-[400px] relative rounded-[2px] shrink-0 w-full" data-name="Background+Border" style={{ backgroundImage: "linear-gradient(rgb(240, 237, 237) 0%, rgb(240, 237, 237) 0.17986%, rgba(240, 237, 237, 0) 0.17986%, rgba(240, 237, 237, 0) 5.7554%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(166,124,82,0.05)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col gap-[48px] items-start min-h-[inherit] p-[57px] relative w-full">
        <HorizontalBorder />
        <Container23 />
        <Container28 />
        <div className="absolute flex h-[56.931px] items-center justify-center left-[46.58%] right-[46.58%] top-[-27.46px]">
          <div className="flex-none rotate-12 size-[48px]">
            <Background22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function HandCraftedJournalSectionPinnedNoteAesthetic() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[896px] relative shrink-0 w-full" data-name="Hand-crafted Journal Section: Pinned Note Aesthetic">
      <div className="absolute bg-[rgba(0,0,0,0.05)] inset-[8px_-8px_-8px_8px] rounded-[9.6px]" data-name="Overlay" />
      <BackgroundBorder />
    </div>
  );
}

function PhysicalCalendarLayout() {
  return (
    <div className="max-w-[1152px] relative shrink-0 w-full" data-name="Physical Calendar Layout">
      <div className="content-stretch flex flex-col gap-[96px] items-start max-w-[inherit] pb-[128px] pt-[48px] px-[80px] relative w-full">
        <TheVisualAnchorHighEndWallCalendarStyle />
        <HandCraftedJournalSectionPinnedNoteAesthetic />
      </div>
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="bg-[#fcf9f8] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative self-stretch" data-name="Main Content Canvas">
      <PhysicalCalendarLayout />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[2182.571px] items-start overflow-clip relative shrink-0 w-full z-[1]" data-name="Container">
      <AsideSideNavBar />
      <MainContentCanvas />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#fcf9f8] content-stretch flex flex-col isolate items-start relative size-full" data-name="Body">
      <HeaderTopNavBar />
      <Container2 />
    </div>
  );
}