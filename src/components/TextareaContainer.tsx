import CopyButton from './CustomButtons/CopyButton';
import MarkdownSectionWrapper from './MarkdownSectionWrapper';
import Textarea from './Textarea';

const TextareaContainer = () => (
  <MarkdownSectionWrapper
    label="markdown"
    hasBorder
    topBarElements={<CopyButton />}
  >
    <Textarea />
  </MarkdownSectionWrapper>
);

export default TextareaContainer;
