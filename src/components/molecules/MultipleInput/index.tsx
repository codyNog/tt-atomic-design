import { Box, Input, StyleProps, Tag } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  value?: string[];
  placeholder: string;
  styleProps?: StyleProps;
  onEnterKeyDown?: (value: string) => void;
}

export const MultipleInput: React.FC<Props> = ({
  value,
  placeholder,
  styleProps,
  onEnterKeyDown
}) => {
  const [text, setText] = useState("");

  return (
    <Box {...styleProps}>
      <Input
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        onKeyDown={(e) => {
          console.log(e.key);
          if (e.key !== "Enter") return;
          onEnterKeyDown(text);
          setText("");
        }}
      />
      {value &&
        value.map((elem) => (
          <Tag key={elem} mt={2}>
            {elem}
          </Tag>
        ))}
      <Tag mt={2}>foo</Tag>
    </Box>
  );
};
