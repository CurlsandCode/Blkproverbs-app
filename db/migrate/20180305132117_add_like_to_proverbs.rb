class AddLikeToProverbs < ActiveRecord::Migration[5.1]
  def change
		add_column :proverbs, :like, :integer, default:0
	end
end
