def get_prev_next(item)
  [get_url(item, :prev), get_url(item, :next)]
end

def get_parent_index(parent_url)
  i = 0
  for parent in @config[:toc]
    curr_parent_url, _ = parent.first
    curr_parent_url = curr_parent_url.to_s
    if curr_parent_url == parent_url
      return i
    end
    i = i + 1
  end
  return -1
end

def get_url(item, prev_or_next)
  parent = get_parent(item)
  if parent
    parent_url, child_urls = parent.first
    parent_url = parent_url.to_s
    parent_index = get_parent_index(parent_url)
    child_index = child_urls.index(item[:url])
    if prev_or_next == :prev
      if child_index == 0
        return parent_url
      end
      return child_urls[child_index - 1]
    elsif prev_or_next == :next
      if child_index + 1 == child_urls.length
        next_parent = @config[:toc][parent_index + 1]
        if next_parent
          next_parent_url, _ = next_parent.first
          return next_parent_url.to_s
        end
      end
      return child_urls[child_index + 1]
    end
  else
    parent_index = get_parent_index(item[:url])
    parent = @config[:toc][parent_index]
    if prev_or_next == :prev
      prev_parent = @config[:toc][parent_index - 1]
      if prev_parent
        prev_parent_url, child_urls = prev_parent.first
        if child_urls
          return child_urls[child_urls.length - 1]
        end
        return prev_parent_url.to_s
      end
    elsif prev_or_next == :next
      _, child_urls = parent.first
      if child_urls
        return child_urls[0]
      end
      next_parent = @config[:toc][parent_index + 1]
      if next_parent
        next_parent_url, _ = next_parent.first
        return next_parent_url.to_s
      end
    end
  end
  return nil
end

def get_next_url(parent, item)

end

def get_parent(item)
  for top_level in @config[:toc]
    _, child_urls = top_level.first
    if child_urls
      for child_url in child_urls
        if child_url == item[:url]
          return top_level
        end
      end
    end
  end
  return nil
end

def title_for_url(url)
  for item in @items
    if item[:url] == url
      return item[:title]
    end
  end

  nil
end

