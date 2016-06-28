def is_homepage?()
  @item[:url] == '/'
end

def title_for_url(url)
  for item in @items
    if item.identifier == url
      return item[:title]
    end
  end

  nil
end

